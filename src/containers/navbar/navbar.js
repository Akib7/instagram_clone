import React from "react";
import SignInBtn from "../../components/sign-in btn";
import "./navbar.styles.scss";

export default function Navbar(){
    return <div className="navbar">
        <p>ReactSocial</p>
        <SignInBtn/>
    </div>
}