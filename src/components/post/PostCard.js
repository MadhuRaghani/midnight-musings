import React, { useState } from "react";
import {
  BsBookmark,
  BsBookmarkFill,
  BsShare,
  BsThreeDots,
} from "react-icons/bs";
import { GoComment } from "react-icons/go";
import { TfiHeart } from "react-icons/tfi";
import { FaHeart } from "react-icons/fa";

function PostCard() {
  const check = true;
  const [showEditDeleteButtons, setShowEditDeleteButtons] = useState(false);

  return (
    <div className="post-card-div flex-row-center">
      <div>
        <img
          src="https://res.cloudinary.com/djbnm7p4c/image/upload/v1687341993/1_tqef33.png"
          alt="profile"
          className="profile-img"
        />
      </div>
      <div className="flex-column post-card-details-div">
        <div className="flex-row justify-space-between">
          <div className="flex-row post-card-username-date-div">
            <p className="margin-block-0 font-weight-semibold">Madhu Raghani</p>
            <p className="margin-block-0 grey-color font-size-small">
              @madhuraghani
            </p>
            <p className="margin-block-0">•</p>
            <p className="margin-block-0">1 min</p>
          </div>
          <div>
            <div>
              <BsThreeDots
                className="github-icons primary-color cursor-pointer font-size-large"
                onClick={() => {
                  setShowEditDeleteButtons((prev) => !prev);
                }}
              />
            </div>
            <div
              className={`edit-delete ${showEditDeleteButtons ? "active" : ""}`}
            >
              <button className="edit-delete-buttons button-primary">
                Edit
              </button>
              <button className="edit-delete-buttons button-primary">
                Delete
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="margin-block-0" style={{ textAlign: "justify" }}>
            You are the sum total of everything you've ever seen, heard, eaten,
            smelled, been told, forgot - it's all there. Everything influences
            each of us, and because of that I try to make sure that my
            experiences are positive.
          </p>
        </div>
        <div className="flex-row justify-space-between">
          {check ? (
            <TfiHeart className="github-icons primary-color big-icons" />
          ) : (
            <FaHeart className="github-icons primary-color big-icons" />
          )}
          <GoComment className="github-icons primary-color big-icons" />
          {check ? (
            <BsBookmark className="github-icons primary-color big-icons" />
          ) : (
            <BsBookmarkFill className="github-icons primary-color big-icons" />
          )}
          <BsShare className="github-icons primary-color big-icons" />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
