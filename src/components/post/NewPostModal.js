import React from "react";
import { useState, useContext } from "react";
import { RxCrossCircled } from "react-icons/rx";
import Modal from "react-modal";
import { AuthContext } from "../../contexts/AuthContext";
import { formatDate } from "../../backend/utils/authUtils";
import { toast } from "react-toastify";
import { createAPost, editAPost } from "../../services/PostServices";
import { PostsContext } from "../../contexts/PostsContext";

function NewPostModal({ editOrNew, postId, postContent }) {
  const { user } = useContext(AuthContext);
  const { setAllPosts } = useContext(PostsContext);

  const [isOpen, setIsOpen] = useState(false);
  const [disableButtons, setDisableButtons] = useState(false);

  const [newPost, setNewPost] = useState(
    editOrNew === "edit"
      ? { content: postContent }
      : {
          content: "",
        }
  );

  const cancelHandler = () => {
    setNewPost({ content: "" });
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  console.log();

  const saveHandler = () => {
    if (newPost.content?.length > 0) {
      if (editOrNew === "edit") {
        editAPost(setAllPosts, postId, newPost, setDisableButtons);
      } else {
        createAPost(
          setAllPosts,
          {
            ...newPost,
            likes: {
              likeCount: 0,
              likedBy: [],
              dislikedBy: [],
            },
            comments: [],
            username: user.username,
            createdAt: formatDate(),
            updatedAt: formatDate(),
          },
          setDisableButtons
        );
      }
      setIsOpen(false);
      setNewPost({});
    } else {
      toast.error("Please Enter Post");
    }
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#813772",
      color: "#fff",
    },
  };

  Modal.setAppElement("body");

  return (
    <div>
      {editOrNew === "edit" ? (
        <button
          className="edit-delete-buttons  button-primary"
          onClick={() => {
            openModal();
          }}
          disabled={disableButtons}
        >
          Edit
        </button>
      ) : (
        <button
          className="button-primary font-size-medium"
          onClick={() => {
            openModal();
          }}
        >
          Create New Post
        </button>
      )}
      <Modal isOpen={isOpen} style={customStyles}>
        <div className="flex-column">
          <div>
            <RxCrossCircled
              style={{ padding: "0" }}
              className="github-icons big-icons cursor-pointer"
              onClick={() => {
                cancelHandler();
              }}
            />
          </div>
          <div className="flex-column-center gap-point-5">
            <h1 className="margin-block-xs">
              {editOrNew === "edit" ? "Edit " : "Create New "}Post
            </h1>
            <div className="flex-row-center-center gap-point-5 padding-leftright-point-5">
              <img
                src={user.profile_pic}
                alt="profile"
                className="profile-img"
              />
              <textarea
                cols="40"
                rows="2"
                type="text"
                placeholder="Whats happening?"
                className="post-content-input"
                onChange={(e) => {
                  setNewPost({ content: e.target.value });
                }}
                value={newPost.content}
              ></textarea>
            </div>
            <button
              className="big-button-secondary width-fit-content font-size-xxlarge"
              onClick={() => {
                saveHandler();
              }}
              disabled={disableButtons}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default NewPostModal;
