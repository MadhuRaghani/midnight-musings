import React, { useContext, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SuggestionsBar from "../../components/suggestionsBar/SuggestionsBar";
import PostCard from "../../components/post/PostCard";
import { PostsContext } from "../../contexts/PostsContext";
import FiltersCard from "../../components/filtersCard/FiltersCard";

function Explore() {
  const { allPosts } = useContext(PostsContext);
  const [sortBy, setSortBy] = useState("");

  const showAllPosts =
    sortBy.length > 0
      ? sortBy === "trending"
        ? allPosts
            .filter(({ likes: { likeCount } }) => likeCount > 5)
            .sort(
              (
                { likes: { likeCount: likeCount1 } },
                { likes: { likeCount: likeCount2 } }
              ) => likeCount2 - likeCount1
            )
        : [...allPosts].sort(
            ({ createdAt: createdAt1 }, { createdAt: createdAt2 }) =>
              new Date(createdAt2) - new Date(createdAt1)
          )
      : allPosts;

  return (
    <div className="flex-row-center justify-space-evenly flex-grow-1">
      <Sidebar />
      <div>
        <FiltersCard sortBy={sortBy} setSortBy={setSortBy} />
        {showAllPosts.map((eachPost) => (
          <PostCard key={eachPost.id} postDetails={eachPost} />
        ))}
      </div>
      <SuggestionsBar />
    </div>
  );
}

export default Explore;
