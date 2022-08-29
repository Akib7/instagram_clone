import React from "react";
import Post from "../post/post";

import "./feed.styles.scss";

export default function Feed() {
  return (
    <div className="feed">
      <Post
        username="Akib"
        profileUrl="https://lh3.googleusercontent.com/a/AItbvmnQFwD5jPrhFMGmobIS62-fX2HRj7tp4sIlnRDVOgI=s96-c"
        photoURL="https://firebasestorage.googleapis.com/v0/b/react-insta-1d4f3.appspot.com/o/images%2FdjSZvQNDln.jpg?alt=media&token=f40ff8e2-e02f-48f7-a717-21b41a095264"
        caption="Hey, this is a new post"
      />
    </div>
  );
}
