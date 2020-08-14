import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import "./Authentication.css"

const Registration = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const history = useHistory();

    const checkResponse = (response) => {
        if (response.data.correct) {
            localStorage.setItem("token", response.data.token)
            redirect();
        } else {
            setMessage(response.data.msg);
            // TODO: Need to handle this, display the error message on page too.
            console.log(message);
        }
    };

    const redirect = () => {
        history.push("/auth/login");
    };

    const sendRegistrationDetails = (event) => {
        event.preventDefault();
        let params = {"username": username, "password": password};
        axios.post("http://localhost:8762/auth/register", params).then(response => checkResponse(response))
    }

    return (
        <div className="registration-page">
            <div className="registration-container">
                <div className="registration-text-container">
                    <h2 className="registration-title">Registration</h2>
                </div>
                <div className="registration-form-container">
                    <form className="registration-form" onSubmit={sendRegistrationDetails}>
                        <label htmlFor="registration-username-input" className="registration-label">Username</label>
                        <input type="text" name="registration-username-input" placeholder="Type your username" className="registration-input" autoComplete="off" onChange={event => setUsername(event.target.value)} required/>
                        <label htmlFor="registration-password-input" className="registration-label">Password</label>
                        <input type="password" name="registration-password-input" placeholder="Type your password" className="registration-input" autoComplete="off" onChange={event => setPassword(event.target.value)} required/>
                        {/*<label htmlFor="registration-email-input" className="registration-label">Email</label>*/}
                        {/*<input type="email" name="registration-email-input" placeholder="Type your email address" className="registration-input" autoComplete="off" required/>*/}
                        <input type="submit" className="registration-button" value="Register"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;