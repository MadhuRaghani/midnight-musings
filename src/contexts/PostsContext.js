import { createContext, useState, useEffect } from "react";
import { getExplorePosts } from "../services/PostServices";

export const PostsContext = createContext();

function PostsContextProvider({ children }) {
  const [allPosts, setAllPosts] = useState([]);
  const [bookMarkedPosts, setBookMarkedPosts] = useState([]);

  useEffect(() => {
    getExplorePosts(setAllPosts);
    // getBookMarkedPosts(setBookMarkedPosts);
  }, []);

  return (
    <PostsContext.Provider
      value={{ allPosts, setAllPosts, bookMarkedPosts, setBookMarkedPosts }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export default PostsContextProvider;
