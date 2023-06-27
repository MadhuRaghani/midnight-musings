import React, { useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SuggestionsBar from "../../components/suggestionsBar/SuggestionsBar";
import PostCard from "../../components/post/PostCard";
import { PostsContext } from "../../contexts/PostsContext";

function Bookmark() {
  const { allPosts, bookMarkedPosts } = useContext(PostsContext);

  const bookMarkedPostsDetails = allPosts.filter(({ _id }) =>
    bookMarkedPosts.includes(_id)
  );

  return (
    <div className="flex-row-center justify-space-evenly">
      <Sidebar />
      <div>
        {bookMarkedPostsDetails.map((eachPost) => (
          <PostCard key={eachPost.id} postDetails={eachPost} />
        ))}
      </div>
      <SuggestionsBar />
    </div>
  );
}

export default Bookmark;
