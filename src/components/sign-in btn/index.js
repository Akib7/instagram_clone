import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/user";
import { signInWithGoogle } from "../../firebase";
import "./sign-in-btn.styles.scss";

export default function SignInBtn() {
  const { user, setUser } = useContext(UserContext).user;
  const signInBtnClick = async () => {
    let userBySignIn = signInWithGoogle();

    if (userBySignIn) setUser(userBySignIn);

    console.log(userBySignIn);
  };
  return (
    <div className="signInBtn" onClick={signInBtnClick}>
      <p>Sign in with Google</p>
    </div>
  );
}
