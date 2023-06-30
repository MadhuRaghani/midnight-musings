import React from "react";
import { useNavigate } from "react-router-dom";
import { followUnfollowUser } from "../../services/UserServices";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { AuthContext } from "../../contexts/AuthContext";

function ProfileSuggestionCard({ userData }) {
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserContext);
  const { setUser } = useContext(AuthContext);

  return (
    <div
      className="flex-row justify-space-between suggestion-card cursor-pointer"
      onClick={() => {
        navigate("/user/" + userData._id);
      }}
    >
      <div className="flex-row suggestion-card-name-image">
        <img src={userData.profile_pic} alt="profile" className="profile-img" />
        <div className="flex-column-center justify-space-around suggestion-card-name-div">
          <p className="margin-block-0">{`${userData.firstName} ${userData.lastName}`}</p>
          <p className="margin-block-0 grey-color font-size-small">
            @{userData.username}
          </p>
        </div>
      </div>
      <div className="flex-row">
        <button
          className="button-primary font-size-medium suggestion-card-btn"
          onClick={(event) => {
            followUnfollowUser(
              "follow",
              userData._id,
              setUser,
              users,
              setUsers
            );
            event.stopPropagation();
          }}
        >
          Follow +
        </button>
      </div>
    </div>
  );
}

export default ProfileSuggestionCard;
