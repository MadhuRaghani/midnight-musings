import React from "react";
import { useContext, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { AuthContext } from "../../contexts/AuthContext";
import { logoutHandler } from "../../services/AuthServices";
import { useNavigate } from "react-router-dom";

function ProfileSidebarCard() {
  const { user, setUser, setToken, setIsLoggedIn } = useContext(AuthContext);
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex-row-center-center gap-1 profile-box">
      <img
        src={user.profile_pic}
        alt="profile"
        className="profile-img cursor-pointer"
        onClick={() => {
          navigate("/profile");
        }}
      />
      <div
        className="flex-column post-card-username-date-div cursor-pointer"
        onClick={() => {
          navigate("/profile");
        }}
      >
        <p className="margin-block-0 font-weight-semibold">
          {user.username
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
            .join(" ")}
        </p>
        <p className="margin-block-0 grey-color font-size-small text-align-left">
          @{user.username}
        </p>
      </div>
      <div>
        <div>
          <BsThreeDots
            className="github-icons primary-color cursor-pointer font-size-large"
            onClick={() => {
              setShowLogoutButton((prev) => !prev);
            }}
          />
        </div>
        <div className={`edit-delete ${showLogoutButton ? "active" : ""}`}>
          <button
            className="edit-delete-buttons  logout-btn button-primary"
            onClick={() => {
              setShowLogoutButton(false);
              logoutHandler(setUser, setToken, setIsLoggedIn);
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileSidebarCard;
