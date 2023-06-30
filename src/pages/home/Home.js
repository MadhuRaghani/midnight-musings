import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SuggestionsBar from "../../components/suggestionsBar/SuggestionsBar";
import PostCard from "../../components/post/PostCard";
import { useContext } from "react";
import { PostsContext } from "../../contexts/PostsContext";
import { AuthContext } from "../../contexts/AuthContext";

function Home() {
  const { allPosts } = useContext(PostsContext);
  const { user } = useContext(AuthContext);

  const userfeedPosts = allPosts.filter(
    ({ username }) =>
      username === user.username ||
      user.following.find((eachUser) => eachUser.username === username)
  );

  return (
    <div className="flex-row-center justify-space-evenly">
      <Sidebar />
      <div>
        {userfeedPosts.map((eachPost) => (
          <PostCard key={eachPost.id} postDetails={eachPost} />
        ))}
      </div>
      <SuggestionsBar />
    </div>
  );
}

export default Home;
