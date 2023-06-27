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

export const likeAPost = async (postId, setAllPosts, setDisableButtons) => {
  setDisableButtons(true);
  try {
    const response = await axios.post(
      "/api/posts/like/" + postId,
      {},
      {
        headers: { authorization: localStorage.getItem("authenticationToken") },
      }
    );
    if (response.status === 201) {
      setAllPosts(response.data.posts);
      toast.success("Liked It");
    }
  } catch (err) {
    console.error(err);
  } finally {
    setDisableButtons(false);
  }
};

export const dislikeAPost = async (postId, setAllPosts, setDisableButtons) => {
  setDisableButtons(true);
  try {
    const response = await axios.post(
      "/api/posts/dislike/" + postId,
      {},
      {
        headers: { authorization: localStorage.getItem("authenticationToken") },
      }
    );
    if (response.status === 201) {
      setAllPosts(response.data.posts);
      toast.warning("Removed Like");
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

export const bookmarkAPost = async (
  postId,
  setBookMarkedPosts,
  setDisableButtons
) => {
  setDisableButtons(true);
  try {
    const response = await axios.post(
      "/api/users/bookmark/" + postId,
      {},
      {
        headers: { authorization: localStorage.getItem("authenticationToken") },
      }
    );
    if (response.status === 200) {
      setBookMarkedPosts(response.data.bookmarks);
      toast.success("BookMarked It");
    }
  } catch (err) {
    console.error(err);
  } finally {
    setDisableButtons(false);
  }
};

export const removeBookmarkPost = async (
  postId,
  setBookMarkedPosts,
  setDisableButtons
) => {
  setDisableButtons(true);
  try {
    const response = await axios.post(
      "/api/users/remove-bookmark/" + postId,
      {},
      {
        headers: { authorization: localStorage.getItem("authenticationToken") },
      }
    );
    if (response.status === 200) {
      setBookMarkedPosts(response.data.bookmarks);
      toast.warning("Removed BookMarked");
    }
  } catch (err) {
    console.error(err);
  } finally {
    setDisableButtons(false);
  }
};
