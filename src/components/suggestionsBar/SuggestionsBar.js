import React from "react";
import ProfileSuggestionCard from "./ProfileSuggestionCard";

function SuggestionsBar() {
  return (
    <div className="flex-column-center suggestions-bar">
      <div className="flex-row suggestions-label">
        <h3 className="margin-block-0">Suggestions For You</h3>
      </div>
      <div>
        <ProfileSuggestionCard />
        <ProfileSuggestionCard />
        <ProfileSuggestionCard />
      </div>
    </div>
  );
}

export default SuggestionsBar;
