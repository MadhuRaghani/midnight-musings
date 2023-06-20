import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../auth/Auth.css";
import { loginHandler } from "../../services/AuthServices";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorLogin, setErrorLogin] = useState({
    hasError: false,
    errorMessage: "",
  });
  const { setIsLoggedIn, setUser, setToken } = useContext(AuthContext);

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="cursive-font margin-block-xs">Login</h2>
        <div className="flex-row-center">
          <form
            onSubmit={(e) => {
              loginHandler(
                e,
                username,
                password,
                setUsername,
                setPassword,
                setErrorLogin,
                setIsLoggedIn,
                setUser,
                setToken
              );
            }}
            className="flex-column"
          >
            <div className="login-card">
              <label className="details-label" htmlFor="username">
                Email:
              </label>
              <input
                id="username"
                type="text"
                required
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="login-card">
              <label className="details-label">Password: </label>
              <div className="login-password-card">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button
                  className="button-secondary"
                  onClick={() => {
                    setShowPassword((prev) => !prev);
                  }}
                >
                  {showPassword ? (
                    <AiOutlineEye className="github-icons primary-color" />
                  ) : (
                    <AiOutlineEyeInvisible className="github-icons primary-color" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex-column-center">
              <button className="big-button-secondary" type="submit">
                Login
              </button>
              <button
                className="big-button-secondary"
                type="submit"
                onClick={() => {
                  setUsername("madhu_raghani");
                  setPassword("Madhu123*");
                }}
              >
                Login As Guest
              </button>
            </div>
          </form>
        </div>
        <div>
          <p className="margin-block-xs">
            Don't Have an Account? <Link to="/signup">Sign Up?</Link>
          </p>
        </div>
        <div className="flex-row-center">
          {errorLogin.hasError && (
            <span className="error-message">{errorLogin.errorMessage}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
