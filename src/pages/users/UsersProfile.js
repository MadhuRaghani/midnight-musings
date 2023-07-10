import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import SuggestionsBar from "../../components/suggestionsBar/SuggestionsBar";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import ProfileCard from "../../components/profileCard/ProfileCard";

function UsersProfile() {
  const { userId } = useParams();
  const { users } = useContext(UserContext);

  const user = users.find(({ _id }) => _id === userId);

  return (
    <div className="flex-row-center justify-space-evenly flex-grow-1">
      <Sidebar />
      <ProfileCard userData={user} />
      <SuggestionsBar />
    </div>
  );
}

export default UsersProfile;
