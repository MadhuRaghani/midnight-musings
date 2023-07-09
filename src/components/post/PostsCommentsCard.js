import React, { useContext } from "react";
import { BsBookmark, BsShare } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import { TfiHeart } from "react-icons/tfi";
import { UserContext } from "../../contexts/UserContext";
import { toast } from "react-toastify";

function PostCommentsCard({
  commentDetails: { _id, text, createdAt, username },
  replyingTo,
}) {
  const { users } = useContext(UserContext);
  const postCreatedByUser = users.find(
    (eachUser) => eachUser.username === username
  );

  return (
    <div
      className="post-card-div post-card-comments-div flex-row"
      style={{ width: "41rem" }}
    >
      <div>
        <img
          src={postCreatedByUser.profile_pic}
          alt="profile"
          className="profile-img cursor-pointer"
        />
      </div>
      <div className="flex-column post-card-details-div width-100">
        <div className="flex-row justify-space-between">
          <div className="flex-row post-card-username-date-div cursor-pointer">
            <p className="margin-block-0 font-weight-semibold">
              {username
                .split("_")
                .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
                .join(" ")}
            </p>
            <p className="margin-block-0 grey-color font-size-small">
              @{username}
            </p>
            <p className="margin-block-0">•</p>
            <p className="margin-block-0">
              {`${new Date(createdAt)
                .toDateString()
                .split(" ")
                .slice(1, 4)
                .join(" ")}`}
            </p>
          </div>
        </div>
        <div className="flex-row justify-space-between">
          <div className="flex-row post-card-username-date-div cursor-pointer">
            <p className="margin-block-0 grey-color font-size-small">
              Replying To{" "}
              <span className="primary-color font-weight-bold">
                @{replyingTo}
              </span>
            </p>
          </div>
        </div>
        <div>
          <p className="margin-block-0" style={{ textAlign: "justify" }}>
            {text}
          </p>
        </div>
        <div className="flex-row justify-space-between">
          <button className="like-bookmark-btn  primary-color font-size-xxlarge flex-row-center-center">
            <TfiHeart className="github-icons primary-color big-icons" />
          </button>
          <GoComment className="github-icons primary-color big-icons " />
          <button className="like-bookmark-btn">
            <BsBookmark className="github-icons primary-color big-icons" />
          </button>
          <BsShare
            className="github-icons primary-color big-icons cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(
                "https://madhuraghani-midnight-musings.netlify.app/posts/" + _id
              );
              toast.success("Copied To Clipboard");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PostCommentsCard;
