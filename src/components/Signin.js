import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";

function Signin(props) {
  const [credentials, setCredentials] = useState({ name: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, password } = credentials;
    try {
      const response = await axios.post(
        "https://elansol-backend-zeta.vercel.app/api/auth/login",
        { name, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        alert("Login successful!");
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.authToken);
        console.log("This is authtoken:", response.data.authToken);
        navigate("/home");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error during signin:", error.message);
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div className="signin-signup-page">
      <div className="signin-container">
        <div className="sign-in-button text-center">Sign In</div>
        <div className="user-icon">
          <FaUser />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="input-icon"><FaUser /></span>
            <input type="text" placeholder="Username" id="name" name="name" onChange={onChange} required />
          </div>

          <div className="input-group">
            <span className="input-icon"><FaLock /></span>
            <input type="password" placeholder="Password" id="password" name="password" onChange={onChange} required />
          </div>
          <div className="form-options">
            <label>
              <input type="checkbox" className="checkbox mx-1" />
              Remember me
            </label>
            <Link to="#">Forgot your password?</Link>
          </div>
          <button className="login-button">Login</button>
          <div className='d-flex justify-content-center align-items-center mb-3' style={{ color: "#1abc9c" }}>
            <span className='my-3'>Need an account?</span>
            <Link className="mx-1 register-link" to='/signup' style={{ color: "#1abc9c" }}>Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
