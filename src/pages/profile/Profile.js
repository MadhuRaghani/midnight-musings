import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SuggestionsBar from "../../components/suggestionsBar/SuggestionsBar";
import { logoutHandler } from "../../services/AuthServices";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Profile() {
  const { setUser, setToken, setIsLoggedIn } = useContext(AuthContext);

  return (
    <div className="flex-row-center justify-space-evenly">
      <Sidebar />
      <div>
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
