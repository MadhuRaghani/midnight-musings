import axios from "axios";
import { toast } from "react-toastify";

export const getExplorePosts = async (setAllPosts) => {
  try {
    const response = await axios.get("/api/posts");
    if (response.status === 200) {
      setAllPosts(response.data.posts);
    }
  } catch (err) {
    console.error(err);
  }
};

export const likeDislikeAPost = async (
  likeDislikeFlag,
  postId,
  setAllPosts,
  setDisableButtons
) => {
  setDisableButtons(true);
  try {
    const response = await axios.post(
      "/api/posts/" + likeDislikeFlag + "/" + postId,
      {},
      {
        headers: { authorization: localStorage.getItem("authenticationToken") },
      }
    );
    if (response.status === 201) {
      setAllPosts(response.data.posts);
      likeDislikeFlag === "like"
        ? toast.success("Liked It")
        : toast.warning("Removed Like");
    }
  } catch (err) {
    console.error(err);
  } finally {
    setDisableButtons(false);
  }
};

export const getBookMarkedPosts = async (setBookMarkedPosts) => {
  try {
    const response = await axios.get("/api/users/bookmark/", {
      headers: { authorization: localStorage.getItem("authenticationToken") },
    });
    if (response.status === 200) {
      setBookMarkedPosts(response.data.bookmarks);
    }
  } catch (err) {
    console.error(err);
  }
};

export const bookmarkRemoveBookMarkAPost = async (
  bookmarkRemoveBookMarkFlag,
  postId,
  setBookMarkedPosts,
  setDisableButtons
) => {
  setDisableButtons(true);
  try {
    const response = await axios.post(
      "/api/users/" + bookmarkRemoveBookMarkFlag + "/" + postId,
      {},
      {
        headers: { authorization: localStorage.getItem("authenticationToken") },
      }
    );
    if (response.status === 200) {
      setBookMarkedPosts(response.data.bookmarks);
      bookmarkRemoveBookMarkFlag === "bookmark"
        ? toast.success("BookMarked It")
        : toast.warning("Removed BookMarked");
    }
  } catch (err) {
    console.error(err);
  } finally {
    setDisableButtons(false);
  }
};
