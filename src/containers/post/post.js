import React from "react";
import Commment from "../../components/comment/comment";

import { ref, deleteObject } from "firebase/storage";
import { doc, deleteDoc, collection } from "firebase/firestore";

import "./post.styles.scss";
import { fStore, storage } from "../../firebase";
import CommentInput from "../../components/comment-input/comment";

export default function Post({
  username,
  profileUrl,
  photoURL,
  caption,
  comments,
  id,
}) {
  const deletePost = () => {
    //delete the image from firebase storage

    //get reference to the image file we would like to delete
    const storageRef = ref(storage, photoURL);

    //delete the file
    deleteObject(storageRef)
      .then(() => {
        console.log("Deleted successfully");
      })
      .catch((error) => {
        console.log(`Erro ${error}`);
      });

    //2  delete the post info from firebase firestore
    const usersCollectionRef = collection(fStore, "posts");

    deleteDoc(doc(usersCollectionRef, id))
      .then(() => {
        console.log("Deleted successfully");
      })
      .catch((error) => {
        console.log(`Error ${error}`);
      });
  };

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerLeft">
          <img className="post__profilePicture" src={profileUrl} />
          <p style={{ marginLeft: "8px" }}>{username}</p>
        </div>
        <button onClick={deletePost} className="post__deleteBtn">
          Delete
        </button>
      </div>

      <div className="post__center">
        <img className="post__photoUrl" src={photoURL} />
      </div>

      <div>
        <p>
          <span style={{ fontWeight: "500", marginRight: "4px" }}>
            {username}
          </span>
          {caption}
        </p>
      </div>

      {comments ? (
        comments.map((comment) => (
          <Commment username={comment.username} caption={comment.comment} />
        ))
      ) : (
        <></>
      )}

      <CommentInput comments={comments} id={id} />
    </div>
  );
}
