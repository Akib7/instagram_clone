import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/user";
import { fStore } from "../../firebase";
import { doc, updateDoc, collection } from "firebase/firestore";

import "./comment.styles.scss";

export default function CommentInput({ comments, id }) {
  const [comment, setComment] = useState("");
  const [user, setUser] = useContext(UserContext).user;
  const [commentArray, setcommentArray] = useState(comments ? comments : []);

  const addComment = () => {
    //add comment to the post info

    if (comment != "") {
      commentArray.push({
        comment: comment,
        username: user.email.replace("@gmail.com", "").toLowerCase(),
      });

      const usersCollectionRef = doc(fStore, "posts", id);

      updateDoc(usersCollectionRef, {
        comments: commentArray,
      })
        .then(() => {
          setComment("");
          console.log("Comment added");
        })
        .catch((error) => {
          console.log(`Error ${error}`);
        });
    }
  };
  return (
    <div className="commentInput">
      <textarea
        className="commentInput__textarea"
        rows="1"
        placeholder="write a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button onClick={addComment} className="commentInput__btn">
        Post
      </button>
    </div>
  );
}
