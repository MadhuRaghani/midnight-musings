import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  BsBookmark,
  BsBookmarkFill,
  BsShare,
  BsThreeDots,
} from "react-icons/bs";
import { TfiHeart } from "react-icons/tfi";
import { FaHeart } from "react-icons/fa";
import { PostsContext } from "../../contexts/PostsContext";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";
import {
  bookmarkRemoveBookMarkAPost,
  deleteAPost,
  likeDislikeAPost,
} from "../../services/PostServices";
import { toast } from "react-toastify";
import NewPostModal from "./NewPostModal";

function PostPageCard({
  postDetails: {
    _id,
    likes: { likedBy, likeCount },
    content,
    createdAt,
    username,
  },
}) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { users } = useContext(UserContext);
  const { setAllPosts, bookMarkedPosts, setBookMarkedPosts } =
    useContext(PostsContext);
  const [showEditDeleteButtons, setShowEditDeleteButtons] = useState(false);
  const [disableButtons, setDisableButtons] = useState(false);
  const postCreatedByUser = users.find(
    (eachUser) => eachUser.username === username
  );

  const isPostLikedByCurrentUser = (likedBy) =>
    likedBy.find((currentUser) => currentUser.username === user.username);

  const isPostBookMarked = (bookMarkedPosts) =>
    bookMarkedPosts.find((bookMarkId) => bookMarkId === _id);

  return (
    <div className="post-card-div post-card-page-div font-size-large flex-column">
      <div className="flex-row gap-point-5">
        <img
          src={postCreatedByUser.profile_pic}
          alt="profile"
          className="profile-img cursor-pointer"
          onClick={() => {
            navigate("/user/" + postCreatedByUser._id);
          }}
        />
        <div
          className="flex-row justify-space-between"
          style={{ width: "98%" }}
        >
          <div
            className="flex-column post-card-username-date-div cursor-pointer"
            onClick={() => {
              navigate("/user/" + postCreatedByUser._id);
            }}
          >
            <p className="margin-block-0 font-weight-semibold">
              {username
                .split("_")
                .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
                .join(" ")}
            </p>
            <p className="margin-block-0 grey-color font-size-medium text-align-left">
              @{username}
            </p>
          </div>
          {username === user.username && (
            <div>
              <div>
                <BsThreeDots
                  className="github-icons primary-color cursor-pointer medium-icons font-size-large"
                  onClick={() => {
                    setShowEditDeleteButtons((prev) => !prev);
                  }}
                />
              </div>
              <div
                className={`edit-delete ${
                  showEditDeleteButtons ? "active" : ""
                }`}
              >
                <label
                  onClick={() => {
                    setShowEditDeleteButtons(false);
                  }}
                >
                  <NewPostModal
                    editOrNew={"edit"}
                    postId={_id}
                    postContent={content}
                  />
                </label>

                <button
                  className="edit-delete-buttons edit-delete-buttons-2 button-primary"
                  disabled={disableButtons}
                  onClick={() => {
                    setShowEditDeleteButtons(false);
                    deleteAPost(setAllPosts, _id, setDisableButtons);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex-column post-card-details-page-div width-100">
        <div>
          <p
            className="margin-block-0 cursor-pointer"
            style={{ textAlign: "justify" }}
            onClick={() => {
              navigate("/posts/" + _id);
            }}
          >
            {content}
          </p>
        </div>
        <p className="margin-block-0 text-align-left grey-color font-size-medium">
          {`${new Date(createdAt)
            .toTimeString()
            .split(" ")[0]
            .split(":")
            .slice(0, 2)
            .join(":")} · ${new Date(createdAt)
            .toDateString()
            .split(" ")
            .slice(1, 4)
            .join(" ")}`}
        </p>
        <hr className="margin-block-0 hr" />
        <p className="margin-block-0 text-align-left font-weight-medium">{`${likeCount} likes`}</p>
        <hr className="margin-block-0 hr" />
        <div className="flex-row justify-space-between">
          <button
            disabled={disableButtons}
            className="like-bookmark-btn cursor-pointer primary-color font-size-xxlarge flex-row-center-center"
            onClick={() => {
              isPostLikedByCurrentUser(likedBy)
                ? likeDislikeAPost(
                    "dislike",
                    _id,
                    setAllPosts,
                    setDisableButtons
                  )
                : likeDislikeAPost("like", _id, setAllPosts, setDisableButtons);
            }}
          >
            {isPostLikedByCurrentUser(likedBy) ? (
              <FaHeart className="github-icons primary-color big-icons" />
            ) : (
              <TfiHeart className="github-icons primary-color big-icons" />
            )}
          </button>
          <button
            disabled={disableButtons}
            className="like-bookmark-btn cursor-pointer"
            onClick={() => {
              isPostBookMarked(bookMarkedPosts)
                ? bookmarkRemoveBookMarkAPost(
                    "remove-bookmark",
                    _id,
                    setBookMarkedPosts,
                    setDisableButtons
                  )
                : bookmarkRemoveBookMarkAPost(
                    "bookmark",
                    _id,
                    setBookMarkedPosts,
                    setDisableButtons
                  );
            }}
          >
            {isPostBookMarked(bookMarkedPosts) ? (
              <BsBookmarkFill className="github-icons primary-color big-icons" />
            ) : (
              <BsBookmark className="github-icons primary-color big-icons" />
            )}
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

export default PostPageCard;
