import React, { useContext, useState } from "react";
import SignInBtn from "../../components/sign-in btn";
import { UserContext } from "../../contexts/user";

import "./create-post.styles.scss";

export default function CreatePost() {
  const [user, setUser] = useContext(UserContext).user;

  const [caption, setCaption] = useState("");

  const handleChange = () => {};
  return (
    <div className="createPost">
      {user ? (
        <div className="createPost__loggedIn">
          <p>Create Post</p>
          <div className="createPost__loggedInCenter">
            <textarea
              className="createPost__textarea"
              rows="3"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            ></textarea>
          </div>
          <input type="file" accept="image/*" onChange={handleChange} />
          <div></div>
        </div>
      ) : (
        <div>
          <SignInBtn />
          <p style={{ marginLeft: "12px" }}>to Post & Comment</p>
        </div>
      )}
    </div>
  );
}
