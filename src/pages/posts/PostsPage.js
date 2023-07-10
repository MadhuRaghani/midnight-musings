import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../../contexts/PostsContext";
import Sidebar from "../../components/sidebar/Sidebar";
import SuggestionsBar from "../../components/suggestionsBar/SuggestionsBar";
import PostPageCard from "../../components/post/PostPageCard";
import PostCommentsCard from "../../components/post/PostsCommentsCard";

function PostsPage() {
  const { postId } = useParams();
  const { allPosts } = useContext(PostsContext);

  const reqdPost = allPosts.find(({ _id }) => _id === postId);

  return (
    <div className="flex-row-center justify-space-evenly flex-grow-1">
      <Sidebar />
      <div>
        <PostPageCard postDetails={reqdPost} />
        {reqdPost.comments.length > 0 && (
          <div>
            <h2 className="primary-color text-align-left margin-block-xs">
              Comments:{" "}
            </h2>
            {reqdPost.comments.map((eachComment) => (
              <PostCommentsCard
                commentDetails={eachComment}
                replyingTo={reqdPost.username}
              />
            ))}
          </div>
        )}
      </div>
      <SuggestionsBar />
    </div>
  );
}

export default PostsPage;
