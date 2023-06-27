import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SuggestionsBar from "../../components/suggestionsBar/SuggestionsBar";
// import PostCard from "../../components/post/PostCard";

function Home() {
  return (
    <div className="flex-row-center justify-space-evenly">
      <Sidebar />
      {/* <div>
        <PostCard />
        <PostCard />
        <PostCard />
      </div> */}
      <SuggestionsBar />
    </div>
  );
}

export default Home;
