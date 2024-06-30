import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaRegCalendarAlt, FaEnvelope } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function Signup(props) {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", date: null });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, date } = credentials;
    try {
      const response = await axios.post(
        "https://elansol-backend-zeta.vercel.app/api/auth/createuser",
        { name, email, password, date },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        alert("Registration successful!");
        localStorage.setItem('token', response.data.authToken);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/home");
        // props.showAlert("Account created successfully", "success");
      } else {
        console.error("Signup failed:", response.data.errors); // Log the validation errors
      }
    } catch (error) {
      console.error("Error during signup:", error.message); // Log the fetch error
    }
  }

  const handleDateChange = (date) => {
    setCredentials({ ...credentials, date });
  }

  return (
    <div className="signin-signup-page">
      <div className="signin-container center-content">
        <div className="sign-in-button text-center">Register</div>
        <div className="user-icon">
          <FaUser />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="input-icon"><FaUser /></span>
            <input type="text" placeholder="Username" id="name" name="name" onChange={(e) => setCredentials({ ...credentials, name: e.target.value })} required />
          </div>
          <div className="input-group">
            <span className="input-icon"><FaEnvelope /></span>
            <input type="email" placeholder="Email" id="email" name="email" onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} required />
          </div>
          <div className="input-group">
            <span className="input-icon"><FaLock /></span>
            <input type="password" placeholder="Password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} required />
          </div>
          <div className="input-group">
            <span className="input-icon"><FaRegCalendarAlt /></span>
            <input type="date" placeholder="Date of Birth" onChange={(e) => setCredentials({ ...credentials, date: e.target.value })} required />
          </div>

          <button className="login-button">Signup</button>
          <div className='d-flex justify-content-center align-items-center mb-3 account' style={{ color: "#1abc9c" }}>
            <span className='my-3'>Already have an account?</span>
            <Link className="mx-1 register-link" to='/' style={{ color: "#1abc9c" }}>Signin</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
