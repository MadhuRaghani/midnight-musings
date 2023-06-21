import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SuggestionsBar from "../../components/suggestionsBar/SuggestionsBar";

function Profile() {
  return (
    <div className="flex-row-center justify-space-evenly">
      <Sidebar />
      <div>Profile</div>
      <SuggestionsBar />
    </div>
  );
}

export default Profile;
