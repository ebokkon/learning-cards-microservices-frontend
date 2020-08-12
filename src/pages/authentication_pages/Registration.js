import React from 'react';
import "./Authentication.css"

const Registration = () => {
    const sendRegistrationDetails = (event) => {
        event.preventDefault();
        alert("Registration button pressed!")
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
                        <input type="text" name="registration-username-input" placeholder="Type your username" className="registration-input" autoComplete="off" required/>
                        <label htmlFor="registration-password-input" className="registration-label">Password</label>
                        <input type="password" name="registration-password-input" placeholder="Type your password" className="registration-input" autoComplete="off" required/>
                        <label htmlFor="registration-email-input" className="registration-label">Email</label>
                        <input type="email" name="registration-email-input" placeholder="Type your email address" className="registration-input" autoComplete="off" required/>
                        <input type="submit" className="registration-button" value="Register"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;