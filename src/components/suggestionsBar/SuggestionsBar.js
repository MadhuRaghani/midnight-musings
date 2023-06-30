import React from "react";
import ProfileSuggestionCard from "./ProfileSuggestionCard";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { AuthContext } from "../../contexts/AuthContext";

function SuggestionsBar() {
  const { users } = useContext(UserContext);
  const { user } = useContext(AuthContext);

  const usersToShow = users.filter(
    ({ _id }) =>
      user._id !== _id &&
      !user.following.find((eachUser) => eachUser._id === _id)
  );

  return (
    <div className="flex-column-center suggestions-bar">
      <div className="flex-row suggestions-label">
        <h3 className="margin-block-0">Suggestions For You</h3>
      </div>
      <div className="flex-column">
        {usersToShow.map((eachUser) => (
          <ProfileSuggestionCard key={eachUser.id} userData={eachUser} />
        ))}
      </div>
    </div>
  );
}

export default SuggestionsBar;
