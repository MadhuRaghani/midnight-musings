import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../../contexts/PostsContext";
import Sidebar from "../../components/sidebar/Sidebar";
import SuggestionsBar from "../../components/suggestionsBar/SuggestionsBar";
import PostPageCard from "../../components/post/PostPageCard";

function PostsPage() {
  const { postId } = useParams();
  const { allPosts } = useContext(PostsContext);

  const reqdPost = allPosts.find(({ _id }) => _id === postId);

  return (
    <div className="flex-row-center justify-space-evenly">
      <Sidebar />
      <div>
        <PostPageCard postDetails={reqdPost} />
        <div>TODO: Comments ARea</div>
      </div>
      <SuggestionsBar />
    </div>
  );
}

export default PostsPage;
