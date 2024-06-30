import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';
import { useEffect } from 'react';

import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home";

function App() {
  const isAuthenticated = () => !!localStorage.getItem("token");

  const PrivateRoute = ({ element }) => {
    useEffect(() => {
      if (!isAuthenticated()) {
        alert("You are not authenticated. Please log in.");
      }
    }, []);

    return isAuthenticated() ? element : <Navigate to="/" />;
  };
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Signin/>} />
      <Route exact path="/signup" element={<Signup />} />
      <Route
        path="/home"
        element={<PrivateRoute element={<Home />} />}
      />
      </Routes>
    </Router>
  );
}

export default App;
