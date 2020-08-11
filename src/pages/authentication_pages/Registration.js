import React from 'react';
import "./Authentication.css"

const Registration = () => {
  return (
      <div>
        <h2>Registration</h2>
          <div>
              <form className="registration-form">
                  <label htmlFor="registration-username-input">Username</label>
                  <input type="text" name="registration-username-input" className="registration-username"/>
                  <label htmlFor="registration-password-input">Password</label>
                  <input type="password" name="registration-password-input" className="registration-password"/>
                  <input type="submit" className="registration-button" value="Register"/>
                  {/*Need email adress field too,*/}
              </form>
          </div>
      </div>
  );
};

export default Registration;
