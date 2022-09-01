import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/user";
import "./comment.styles.scss";

export default function CommentInput({ comments, id }) {
  const [comment, setComment] = useState("");
  const [user, setUser] = useContext(UserContext).user;
  const [commentArray, setcommentArray] = useContext(UserContext).user;
  const addComment = () => {
    //add comment to the post info
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
      <button className="commentInput__btn">Post</button>
    </div>
  );
}
