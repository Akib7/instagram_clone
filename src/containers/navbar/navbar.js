import React, { useContext, useState } from "react";
import SignInBtn from "../../components/sign-in btn";
import { UserContext } from "../../contexts/user";
import "./navbar.styles.scss";

export default function Navbar() {
  const { user, setUser } = useContext(UserContext).user;
  return (
    <div className="navbar">
      <p>ReactSocial</p>
      {user ? <img src={user.photoURL} /> : <SignInBtn />}
    </div>
  );
}
