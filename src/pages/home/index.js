import React from "react";
import SignInBtn from "../../components/sign-in btn";
import CreatePost from "../../containers/create post/create-post";
import Navbar from "../../containers/navbar/navbar";
import "./style.scss"

export default function Home(){
    return <div className="home">
        <Navbar/>

        <CreatePost/>
    </div>
}