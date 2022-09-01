import React, { useEffect, useState } from "react";

import { fStore } from "../../firebase";
import Post from "../post/post";
import { collection, doc, onSnapshot } from "firebase/firestore";

import "./feed.styles.scss";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const usersCollectionRef = collection(fStore, "posts");
    onSnapshot(usersCollectionRef, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
    // firestore
    //   .getDocs(firestore.collection(fStore, "users"))
    //   .then((snapshot) => {
    //     setPosts(
    //       snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
    //     );
    //   });
  }, []);

  return (
    <div className="feed">
      {/* <Post
        username="Akib"
        profileUrl="https://lh3.googleusercontent.com/a/AItbvmnQFwD5jPrhFMGmobIS62-fX2HRj7tp4sIlnRDVOgI=s96-c"
        photoURL="https://images7.alphacoders.com/310/310795.jpg"
        caption="Hey, this is a new post"
      /> */}

      {posts.map(({ id, post }) => {
        console.log(post.username);

        return (
          <Post
            key={id}
            id={id}
            profileUrl={post.profileUrl}
            username={post.username}
            photoURL={post.photoUrl}
            caption={post.caption}
          />
        );
      })}

      {/* {posts.map({ id, post })} */}
    </div>
  );
}
