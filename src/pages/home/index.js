import React from "react";
import CreatePost from "../../containers/create post/create-post";
import Feed from "../../containers/feed/feed";
import Navbar from "../../containers/navbar/navbar";
import "./style.scss";

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      <CreatePost />
      <Feed />
    </div>
  );
}
