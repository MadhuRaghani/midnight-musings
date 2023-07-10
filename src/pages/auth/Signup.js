import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "../auth/Auth.css";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { signUpHandler } from "../../services/AuthServices";

function SignUp() {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorSignUp, setErrorSignup] = useState({
    hasError: false,
    errorMessage: "",
  });
  const { setIsLoggedIn, setUser, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="login-page flex-grow-1">
      <div className="login-container">
        <h2 className="cursive-font margin-block-xs">Sign Up</h2>
        <div className="flex-row-center">
          <form
            onSubmit={(e) => {
              signUpHandler(
                e,
                signUpData,
                setSignUpData,
                setErrorSignup,
                setIsLoggedIn,
                setUser,
                setToken,
                navigate
              );
            }}
            autoComplete="off"
            className="flex-column"
          >
            <div className="login-card">
              <label className="details-label" htmlFor="firstName">
                First Name:
              </label>
              <input
                id="firstName"
                required
                type="text"
                value={signUpData.firstName}
                onChange={(event) =>
                  setSignUpData((prev) => ({
                    ...prev,
                    firstName: event.target.value,
                  }))
                }
              />
            </div>
            <div className="login-card">
              <label className="details-label" htmlFor="lastName">
                Last Name:
              </label>
              <input
                id="lastName"
                required
                type="text"
                value={signUpData.lastName}
                onChange={(event) =>
                  setSignUpData((prev) => ({
                    ...prev,
                    lastName: event.target.value,
                  }))
                }
              />
            </div>
            <div className="login-card">
              <label className="details-label" htmlFor="email">
                Email:
              </label>
              <input
                id="email"
                required
                type="email"
                value={signUpData.email}
                onChange={(event) =>
                  setSignUpData((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }))
                }
              />
            </div>
            <div className="login-card">
              <label className="details-label" htmlFor="username">
                Username:
              </label>
              <input
                id="username"
                required
                type="text"
                value={signUpData.username}
                onChange={(event) =>
                  setSignUpData((prev) => ({
                    ...prev,
                    username: event.target.value,
                  }))
                }
              />
            </div>
            <div className="login-card">
              <label className="details-label" htmlFor="password">
                Password:
              </label>
              <div className="login-password-card">
                <input
                  required
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={signUpData.password}
                  onChange={(event) =>
                    setSignUpData((prev) => ({
                      ...prev,
                      password: event.target.value,
                    }))
                  }
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
            <div className="login-card">
              <label htmlFor="confirmPassword" className="details-label">
                Confirm Password:{" "}
              </label>
              <div className="login-password-card">
                <input
                  id="confirmPassword"
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  value={signUpData.confirmPassword}
                  onChange={(event) =>
                    setSignUpData((prev) => ({
                      ...prev,
                      confirmPassword: event.target.value,
                    }))
                  }
                />
                <button
                  className="button-secondary"
                  onClick={() => {
                    setShowConfirmPassword((prev) => !prev);
                  }}
                >
                  {showConfirmPassword ? (
                    <AiOutlineEye className="github-icons primary-color" />
                  ) : (
                    <AiOutlineEyeInvisible className="github-icons primary-color" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex-column-center">
              <button
                type="submit"
                className="big-button-secondary submit-btn-signup"
              >
                Create New Account
              </button>
            </div>
          </form>
        </div>
        <div>
          <p className="margin-block-xs">
            Already Have an Account?{" "}
            <Link className="primary-color font-weight-bold" to="/login">
              Login?
            </Link>
          </p>
        </div>
        <div className="flex-row-center">
          {errorSignUp.hasError && (
            <span className="error-message">{errorSignUp.errorMessage}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
