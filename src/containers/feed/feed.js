import React, { useEffect, useState } from "react";

import { fStore } from "../../firebase";
import Post from "../post/post";

import * as firestore from "firebase/firestore";

import "./feed.styles.scss";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore
      .getDocs(firestore.collection(fStore, "users"))
      .then((querySnapshot) => {
        setPosts(
          querySnapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
        );
      });
  }, []);

  return (
    <div className="feed">
      <Post
        username="Akib"
        profileUrl="https://lh3.googleusercontent.com/a/AItbvmnQFwD5jPrhFMGmobIS62-fX2HRj7tp4sIlnRDVOgI=s96-c"
        photoURL="https://firebasestorage.googleapis.com/v0/b/react-insta-1d4f3.appspot.com/o/images%2FdjSZvQNDln.jpg?alt=media&token=f40ff8e2-e02f-48f7-a717-21b41a095264"
        caption="Hey, this is a new post"
      />

      {/* {posts.map({ id, post })} */}
    </div>
  );
}
