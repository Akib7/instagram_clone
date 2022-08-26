import React, { useContext, useState } from "react";
import SignInBtn from "../../components/sign-in btn";
import { UserContext } from "../../contexts/user";

import "./create-post.styles.scss";

import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export default function CreatePost() {
  const [user, setUser] = useContext(UserContext).user;

  const [caption, setCaption] = useState("");

  const handleChange = () => {};
  const handleUpload = () => {};
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
          <div className="createPost__loggedInBottom">
            <div className="createPost__imageUpload">
              <label htmlFor="fileUpload">
                <AddAPhotoIcon
                  style={{ cursor: "pointer", fontSize: "20px" }}
                />
              </label>
              <input
                id="fileUpload"
                type="file"
                accept="image/*"
                onChange={handleChange}
              />
            </div>
            <button
              className="createPost__uploadBtn"
              onClick={handleUpload}
              style={{ color: caption ? "#000" : "lightgrey" }}
            >
              Upload
            </button>
          </div>
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
