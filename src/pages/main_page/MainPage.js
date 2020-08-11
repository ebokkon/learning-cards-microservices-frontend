import React from 'react';
import "./MainPage.css"
import Login from "../authentication_pages/Login";

const MainPage = () => {
    //localStorage.setItem("username", "User")
    localStorage.clear();
    console.log(localStorage.getItem("username"));

    if (localStorage.getItem("username")) {
        return (
            <div>
                <h2>Main page</h2>
                <p>{`Welcome ${localStorage.getItem("username")}`}</p>
            </div>
        );
    } else {
        return (
        <Login/>
        );
    }

};

export default MainPage;
