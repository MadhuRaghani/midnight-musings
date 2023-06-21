import React from "react";

function ProfileSuggestionCard() {
  return (
    <div className="flex-row-center-center suggestion-card">
      <div className="flex-row-center-center suggestion-card-name-image">
        <img
          src="https://res.cloudinary.com/djbnm7p4c/image/upload/v1687341993/1_tqef33.png"
          alt="profile"
          className="profile-img"
        />
        <div className="flex-column-center suggestion-card-name-div">
          <p className="margin-block-0">Madhu Raghani</p>
          <p className="margin-block-0 grey-color font-size-small">
            @madhuraghani
          </p>
        </div>
      </div>
      <div>
        <button className="button-primary font-size-medium">Follow +</button>
      </div>
    </div>
  );
}

export default ProfileSuggestionCard;
