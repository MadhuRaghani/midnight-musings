import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SuggestionsBar from "../../components/suggestionsBar/SuggestionsBar";
import { logoutHandler } from "../../services/AuthServices";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import ProfileCard from "../../components/profileCard/ProfileCard";

function Profile() {
  const { user, setUser, setToken, setIsLoggedIn } = useContext(AuthContext);

  return (
    <div className="flex-row-center justify-space-evenly">
      <Sidebar />
      <div>
        <ProfileCard userData={user} />
        <button
          className="button-primary"
          onClick={() => {
            logoutHandler(setUser, setToken, setIsLoggedIn);
          }}
        >
          Logout
        </button>
      </div>
      <SuggestionsBar />
    </div>
  );
}

export default Profile;
