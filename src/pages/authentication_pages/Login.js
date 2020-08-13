import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import "./Authentication.css"
import {Link} from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const history = useHistory();

    const checkResponse = (response) => {
        if (response.data.correct) {
            localStorage.setItem("username", response.data.username);
            localStorage.setItem("token", response.data.token);
            redirect();
        } else {
            setMessage(response.data.msg);
        }
    };

    const redirect = () => {
        history.push("/");
        window.location.reload();
    };

    const sendLoginDetails = (event) => {
        event.preventDefault();
        let params = {"username": username, "password": password};
        axios.post("http://localhost:8762/auth/login", params).then(response => checkResponse(response))
        {/*TODO: Need to check inputs*/}
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
                        <input type="text" name="login-username-input" className="login-input" required placeholder="Type your username" autoComplete="off" onChange={event => setUsername(event.target.value)}/>
                        <label htmlFor="login-password-input" className="login-label">Password</label>
                        <input type="password" name="login-password-input" className="login-input" required placeholder="Type your password" onChange={event => setPassword(event.target.value)}/>
                        <input type="submit" className="login-button" value="Login"/>
                    </form>
                </div>
                <div className="registration-link-container">
                    <Link to="/auth/register" className="registration-link">
                        You are not registered? Click here to sign up!
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Login;
