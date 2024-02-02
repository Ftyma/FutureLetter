import { useState } from "react";
import styles from "../css/Login_Signup.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login_Signup = () => {
  let navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleButtonClick = (event) => {
    const container = document.getElementById("container");
    if (event.target.id === "signUp") {
      container.classList.add(styles.rightPanelActive);
    } else if (event.target.id === "signIn") {
      container.classList.remove(styles.rightPanelActive);
    }
  };

  const url = import.meta.env.VITE_API;

  const goLetter = () => {
    navigate("/letter");
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${url}/auth/register`, registerData);
      console.log(res.data);
      if (res) {
        setRegisterData({ username: "", email: "", password: "" });
        alert("successfuly register");
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${url}/auth/login`, loginData);
      console.log(res.data);
      goLetter();
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className={styles.main}>
      {/* create account form */}
      <div
        className={`${styles.container} ${styles.rightPanelActive}`}
        id="container"
      >
        <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
          <form className={styles.myForm}>
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
            <button
              type="submit"
              onClick={handleRegisterSubmit}
              className={styles.myButton}
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* login form */}
        <div className={`${styles.formContainer} ${styles.signInContainer}`}>
          <form className={styles.myForm}>
            <h1 className="font-bold text-2xl mb-4">Sign in</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.myInput}
              value={loginData.email}
              onChange={handleLoginChange}
            />
            <input
              className={styles.myInput}
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
            />
            <button
              className={styles.myButton}
              type="submit"
              onClick={handleLoginSubmit}
            >
              Sign In
            </button>
          </form>
        </div>

        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <h1 className="font-bold text-2xl text-beige">
                  Welcome Back, Friend!
                </h1>
                <button
                  className={`${styles.myBtn}`}
                  id="signIn"
                  onClick={handleButtonClick}
                >
                  Login Here
                </button>
              </div>
              <img
                src="totoro.gif"
                className={`${styles.backgroundImg}`}
                alt="airplaneGIF"
              />
            </div>
            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
              <div className="absolute top-1.09/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <h1 className="font-bold text-2xl text-beige">
                  Hello, New Friend!
                </h1>

                <button
                  className={`${styles.myBtn}`}
                  id="signUp"
                  onClick={handleButtonClick}
                >
                  Create your account
                </button>
              </div>
              <img
                src="hello.gif"
                className={`${styles.backgroundImg}`}
                alt="smileyGIF"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login_Signup;
