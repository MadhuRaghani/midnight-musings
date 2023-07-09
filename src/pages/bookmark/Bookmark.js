import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Sidebar from "../../components/sidebar/Sidebar";
import SuggestionsBar from "../../components/suggestionsBar/SuggestionsBar";
import PostCard from "../../components/post/PostCard";
import { PostsContext } from "../../contexts/PostsContext";

function Bookmark() {
  const { allPosts, bookMarkedPosts } = useContext(PostsContext);

  const bookMarkedPostsDetails = allPosts.filter(({ _id }) =>
    bookMarkedPosts.includes(_id)
  );

  const navigate = useNavigate();

  return (
    <div className="flex-row-center justify-space-evenly">
      <Sidebar />
      {bookMarkedPostsDetails.length === 0 ? (
        <div
          className="flex-row-center-center primary-color cursor-pointer"
          onClick={() => {
            navigate("/home");
          }}
        >
          Start Bookmarking Posts <AiOutlineArrowRight />
        </div>
      ) : (
        <div>
          {bookMarkedPostsDetails.map((eachPost) => (
            <PostCard key={eachPost.id} postDetails={eachPost} />
          ))}
        </div>
      )}

      <SuggestionsBar />
    </div>
  );
}

export default Bookmark;
