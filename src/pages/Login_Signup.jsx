import React, { useState } from "react";
import styles from "../css/Login_Signup.module.css";
import axios from "axios";

const Login_Signup = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleButtonClick = (event) => {
    const container = document.getElementById("container");
    if (event.target.id === "signUp") {
      container.classList.add(styles.rightPanelActive);
    } else if (event.target.id === "signIn") {
      container.classList.remove(styles.rightPanelActive);
    }
  };

  const url = import.meta.env.VITE_API;

  const handleRegisterChange = ({ currentTarget: input }) => {
    setRegisterData({ ...registerData, [input.name]: input.value });
  };

  const handleLoginChange = ({ currentTarget: input }) => {
    setLoginData({ ...loginData, [input.name]: input.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${url}/users`, registerData).then((res) => {
        console.log(res.registerData);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url, data).then((res) => {
        console.log(res.data);
        alert("sucessful login");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.main}>
      <div
        className={`${styles.container} ${styles.rightPanelActive}`}
        id="container"
      >
        <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
          <form className={styles.myForm} onSubmit={handleRegisterSubmit}>
            <h1 className="font-bold text-2xl mb-4">Create Account</h1>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleRegisterChange}
              value={registerData.username}
              required
              className={styles.myInput}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleRegisterChange}
              value={registerData.email}
              required
              className={styles.myInput}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleRegisterChange}
              value={registerData.password}
              required
              className={styles.myInput}
            />
            <button type="submit" className={styles.myButton}>
              Sign Up
            </button>
          </form>
        </div>

        <div className={`${styles.formContainer} ${styles.signInContainer}`}>
          <form className={styles.myForm}>
            <h1 className="font-bold text-2xl mb-4">Sign in</h1>
            <input
              type="email"
              placeholder="Email"
              className={styles.myInput}
            />
            <input
              className={styles.myInput}
              type="password"
              placeholder="Password"
            />
            <button className={styles.myButton}>Sign In</button>
          </form>
        </div>

        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
              <div className="welcome-box">
                <h1 className="font-bold text-xl text-black">
                  Welcome Back, Friend!
                </h1>
                <button
                  className={styles.myButton.ghost}
                  id="signIn"
                  onClick={handleButtonClick}
                >
                  Login Here
                </button>
              </div>
            </div>
            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
              <div className={styles.createAccBox}>
                <h1 className="font-bold text-xl text-black">Hello, Friend!</h1>
                <p>Let's start your journey with us.</p>
                <button
                  className={styles.myButton.ghost}
                  id="signUp"
                  onClick={handleButtonClick}
                >
                  Create your account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login_Signup;
