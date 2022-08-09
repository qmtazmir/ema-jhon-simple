import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="from-container">
      <div>
        <h2 className="login-title">Sign Up</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" />
          </div>
          <div className="input-group">
            <label htmlFor="confirm- password">Confirm-Password</label>
            <input type="password" name="password" id="" />
          </div>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          Already have an account ?
          <Link className="form-link" to="/login">
            Login please
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
