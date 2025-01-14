import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { User } from "../../context/usercontext";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signup } = User();

  const creatUser = {
    name: "nina",
    email: "test@gmail.com",
    password: "123456",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!userName || !email || !password) {
      setError("Please enter name , email and password.");
      return;
    }
    if (
      userName === creatUser.name &&
      email === creatUser.email &&
      password === creatUser.password
    ) {
      signup({ userName: creatUser.name, email: creatUser.email });
      console.log("you've been signed up", { userName, email, password });
      navigate("/");
    } else {
      setError("email or password is incorrect");
    }
  };

  return (
    <React.Fragment>
      <div className="all-container">
        <div className="header-container">
          <h1>Jewelry shop</h1>
          <h3>SignUp form</h3>
        </div>
        <form onClick={handleSubmit} className="signup-container">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              placeholder="name: nina"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
            <label>Email:</label>
            <input
              type="email"
              placeholder="email: test@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label>Password:</label>
            <input
              type="password"
              placeholder="password: 123456"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div>
            <button type="submit" className="btn-click">
              SignUp
            </button>
            <button className="btn-click" onClick={() => navigate("/login")}>
              login
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
export default SignUp;
