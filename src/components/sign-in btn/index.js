import React, { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { signInWithGoogle } from "../../firebase";
import "./sign-in-btn.styles.scss";

export default function SignInBtn() {
  const { setUser } = useContext(UserContext).user;
  const signInBtnClick = async () => {
    let userBySignIn = await signInWithGoogle();

    if (userBySignIn) setUser(userBySignIn);

    console.log(userBySignIn);
  };
  return (
    <div className="signInBtn" onClick={signInBtnClick}>
      <p>Sign in with Google</p>
    </div>
  );
}
