import React, { useContext, useState } from "react";
import "./post.styles.scss";

export default function Post({
  username,
  profileUrl,
  photoURL,
  caption,
  comments,
  id,
}) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerLeft">
          <img className="post__profilePicture" src={profileUrl} />
          <p style={{ marginLeft: "8px" }}>{username}</p>
        </div>
        <button className="post__deleteBtn">Delete</button>
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
    </div>
  );
}
