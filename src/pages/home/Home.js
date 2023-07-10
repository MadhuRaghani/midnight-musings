import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SuggestionsBar from "../../components/suggestionsBar/SuggestionsBar";
import PostCard from "../../components/post/PostCard";
import { useContext } from "react";
import { PostsContext } from "../../contexts/PostsContext";
import { AuthContext } from "../../contexts/AuthContext";
import FiltersCard from "../../components/filtersCard/FiltersCard";
import { useState } from "react";

function Home() {
  const { allPosts } = useContext(PostsContext);
  const { user } = useContext(AuthContext);
  const [sortBy, setSortBy] = useState("");

  const userfeedPosts = allPosts.filter(
    ({ username }) =>
      username === user.username ||
      user.following.find((eachUser) => eachUser.username === username)
  );

  const showUserfeedPosts =
    sortBy.length > 0
      ? sortBy === "trending"
        ? userfeedPosts
            .filter(({ likes: { likeCount } }) => likeCount > 5)
            .sort(
              (
                { likes: { likeCount: likeCount1 } },
                { likes: { likeCount: likeCount2 } }
              ) => likeCount2 - likeCount1
            )
        : [...userfeedPosts].sort(
            ({ createdAt: createdAt1 }, { createdAt: createdAt2 }) =>
              new Date(createdAt2) - new Date(createdAt1)
          )
      : userfeedPosts;

  return (
    <div className="flex-row-center justify-space-evenly flex-grow-1">
      <Sidebar />
      <div>
        <FiltersCard sortBy={sortBy} setSortBy={setSortBy} />
        {showUserfeedPosts.map((eachPost) => (
          <PostCard key={eachPost.id} postDetails={eachPost} />
        ))}
      </div>
      <div>
        <SuggestionsBar />
      </div>
    </div>
  );
}

export default Home;
