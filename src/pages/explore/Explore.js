import React, { useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SuggestionsBar from "../../components/suggestionsBar/SuggestionsBar";
import PostCard from "../../components/post/PostCard";
import { PostsContext } from "../../contexts/PostsContext";

function Explore() {
  const { allPosts } = useContext(PostsContext);

  return (
    <div className="flex-row-center justify-space-evenly">
      <Sidebar />
      <div>
        {allPosts.map((eachPost) => (
          <PostCard key={eachPost.id} postDetails={eachPost} />
        ))}
      </div>
      <SuggestionsBar />
    </div>
  );
}

export default Explore;
