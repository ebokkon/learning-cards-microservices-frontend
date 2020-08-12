import React from 'react';
import "./Authentication.css"
import {Link} from "react-router-dom";

const Login = () => {
    const sendLoginDetails = (event) => {
        event.preventDefault();
        alert("Login button pressed!");
        {/*TODO: Need to implement proper login function with check inputs*/
        }
    }

    return (
        <div className="login-page">
            {/*TODO: Header should be height 10vh, because this container is 90vh*/}
            <div className="login-container">
                <div className="login-text-container">
                    <h2 className="login-title">Login</h2>
                </div>
                <div className="form-container">
                    <form className="login-form" onSubmit={sendLoginDetails}>
                        <label htmlFor="login-username-input" className="login-label">Username</label>
                        <input type="text" name="login-username-input" className="login-input" required placeholder="Type your username" autoComplete="off"/>
                        <label htmlFor="login-password-input" className="login-label">Password</label>
                        <input type="password" name="login-password-input" className="login-input" required placeholder="Type your password"/>
                        <input type="submit" className="login-button" value="Login"/>
                    </form>
                </div>
                <div className="registration-link-container">
                    <Link to="/register" className="registration-link">
                        You are not registered? Click here to sign up!
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Login;
