import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return( 
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <input type="text" placeholder="email"/>
        <input type="text" placeholder="password"/>
        <button className="btn waves-effect waves-light #64b5f6 blue lighten-2">Login</button>
        <h5>
            Don't have an account?
            <Link to="/signup" style={{color:"#64b5f6 blue lighten-2"}}> Sign up</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signin;
