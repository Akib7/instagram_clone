import React, { useContext, useState } from "react";
import SignInBtn from "../../components/sign-in btn";
import { UserContext } from "../../contexts/user";

import "./create-post.styles.scss";

import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { fbDatabase, fStore, storage } from "../../firebase";
import makeid from "../../helper/functions";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, Timestamp, setDoc } from "firebase/firestore";

export default function CreatePost() {
  const [user, setUser] = useContext(UserContext).user;

  const [caption, setCaption] = useState("");

  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);

      var selectedImageSrc = URL.createObjectURL(e.target.files[0]);

      var imagePreview = document.getElementById("image-preview");

      imagePreview.src = selectedImageSrc;
      imagePreview.style.display = "block";
    }
  };
  const handleUpload = async () => {
    if (image) {
      var imageName = makeid(10);
      // var uploadTask = ref(storage, `images/${imageName}.jpg`).put(image);
      const storageRef = ref(storage, `images/${imageName}.jpg`);

      const metadata = {
        contentType: "image/jpeg",
      };

      const uploadTask = uploadBytesResumable(storageRef, image, metadata);
      // const next = (snapShot) => {
      //   // takes the snapShot of each step of the process
      //   console.log(snapShot);
      //   const progress = Math.round(
      //     (snapShot.bytesTransferred / snapShot.totalBytes) * 100
      //   );
      //   setProgress(progress);
      // };
      // // error handling
      // const error = (error) => {
      //   //catches the errors
      //   console.log(error);
      // };
      // const complete = () => {
      //   // gets the functions from storage refences the image storage in firebase by the children
      //   // gets the download url then sets the image from firebase as the value for the imgUrl key:
      //   const spaceRef = ref(storage, `${imageName}.jpg`);
      //   spaceRef.getDownloadURL().then((imageUrl) => {
      //     fbDatabase.collection("posts").add({
      //       timestamp: fStore.FieldValue.serverTimestamp(),
      //       caption: caption,
      //       photoUrl: imageUrl,
      //       username: user.email.replace("@gmail.com", ""),
      //       photoUrl: user.photoURL,
      //     });
      //   });
      // };

      // uploadTask.on(storage.TaskEvent.STATE_CHANGED, {
      //   next: next,
      //   error: error,
      //   complete: complete,
      // });

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Progress function, 1% 2% ...

          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          //get download URL and upload the post info
          const spaceRef = ref(storage, `${imageName}.jpg`);
          getDownloadURL(spaceRef).then(async (imageUrl) => {
            await setDoc(collection(fStore, "posts"), {
              timestamp: Timestamp.now(),
              caption: caption,
              photoUrl: imageUrl,
              username: user.email.replace("@gmail.com", ""),
              photoUrl: user.photoURL,
            });

            // fbDatabase.collection("posts").add({
            //   timestamp: fStore.FieldValue.serverTimestamp(),
            //   caption: caption,
            //   photoUrl: imageUrl,
            //   username: user.email.replace("@gmail.com", ""),
            //   photoUrl: user.photoURL,
            // });
          });
        }
      );
    }
  };
  return (
    <div className="createPost">
      {user ? (
        <div className="createPost__loggedIn">
          <p>Create Post</p>
          <div className="createPost__loggedInCenter">
            <textarea
              className="createPost__textarea"
              rows="3"
              placeholder="enter caption here.."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            ></textarea>

            <div className="createPost__imagePreview">
              <img id="image-preview" alt="" />
            </div>
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
              style={{
                color: caption ? "#000" : "lightgrey",
                cursor: "pointer",
              }}
            >
              {`Upload ${progress != 0 ? progress : ""}`}
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
