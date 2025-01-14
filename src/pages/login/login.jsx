import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../context/usercontext";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = User();

  const makeUser = {
    email: "test@example.com",
    password: "123456",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!password || !email) {
      setError("Please enter name , email and password.");
      return;
    }

    if (email === makeUser.email && password === makeUser.password) {
      login({ email: makeUser.email });
      console.log("you been logged in", { email, password });
      navigate("/");
    } else {
      setError("email or password is incorect");
    }
  };
  
  return (
    <React.Fragment>
      <div className="all-container">
        <div className="header-container">
          <h1>Jewelry shop</h1>
          <h3>login form</h3>
        </div>
        <form onSubmit={handleSubmit} className="login-container">
          <div className="form-group">
            <label>Email :</label>
            <input
              type="email"
              placeholder="email: test@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label>Password :</label>
            <input
              type="password"
              placeholder="password: 123456"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div>
            <button className="btn-click" onClick={() => navigate('/signup')}>sign up</button>
            <button className="btn-click" type="submit">
             login
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
export default Login;
