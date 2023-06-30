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
import { useContext } from "react";
import {
  bookmarkAPost,
  dislikeAPost,
  likeAPost,
  removeBookmarkPost,
} from "../../services/PostServices";
import { PostsContext } from "../../contexts/PostsContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function PostCard({
  postDetails: {
    _id,
    likes: { likedBy, likeCount },
    content,
    createdAt,
    // updatedAt,
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
    <div className="post-card-div flex-row">
      <div>
        <img
          src="https://res.cloudinary.com/djbnm7p4c/image/upload/v1687341993/1_tqef33.png"
          alt="profile"
          className="profile-img cursor-pointer"
          onClick={() => {
            navigate("/user/" + postCreatedByUser._id);
          }}
        />
      </div>
      <div className="flex-column post-card-details-div width-100">
        <div className="flex-row justify-space-between">
          <div className="flex-row post-card-username-date-div">
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
            {content}
          </p>
        </div>
        <div className="flex-row justify-space-between">
          <button
            disabled={disableButtons}
            className="like-bookmark-btn cursor-pointer primary-color font-size-xxlarge flex-row-center-center"
            onClick={() => {
              isPostLikedByCurrentUser(likedBy)
                ? dislikeAPost(_id, setAllPosts, setDisableButtons)
                : likeAPost(_id, setAllPosts, setDisableButtons);
            }}
          >
            {isPostLikedByCurrentUser(likedBy) ? (
              <FaHeart className="github-icons primary-color big-icons" />
            ) : (
              <TfiHeart className="github-icons primary-color big-icons" />
            )}
            {" " + likeCount}
          </button>
          <GoComment className="github-icons primary-color big-icons cursor-pointer" />
          <button
            disabled={disableButtons}
            className="like-bookmark-btn cursor-pointer"
            onClick={() => {
              isPostBookMarked(bookMarkedPosts)
                ? removeBookmarkPost(_id, setBookMarkedPosts, setDisableButtons)
                : bookmarkAPost(_id, setBookMarkedPosts, setDisableButtons);
            }}
          >
            {isPostBookMarked(bookMarkedPosts) ? (
              <BsBookmarkFill className="github-icons primary-color big-icons" />
            ) : (
              <BsBookmark className="github-icons primary-color big-icons" />
            )}
          </button>
          <BsShare className="github-icons primary-color big-icons cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
