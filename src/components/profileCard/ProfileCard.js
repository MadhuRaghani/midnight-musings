import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { PostsContext } from "../../contexts/PostsContext";
import PostCard from "../post/PostCard";
import { UserContext } from "../../contexts/UserContext";
import { followUnfollowUser } from "../../services/UserServices";

function ProfileCard({ userData }) {
  const { user, setUser } = useContext(AuthContext);
  const { users, setUsers } = useContext(UserContext);
  const { allPosts } = useContext(PostsContext);

  const posts = allPosts.filter(
    ({ username }) => username === userData.username
  );

  const isCurrentUser = userData._id === user._id;
  const isFollowingThisUser = user.following.find(
    ({ _id }) => _id === userData._id
  );

  return (
    <div className="flex-column-center-center profile-card-div">
      <img
        src={userData.profile_pic}
        alt="profile"
        className="profile-card-img"
      />
      <div className="flex-column-center username-name-div">
        <h2 className="margin-block-0">{`${userData.firstName} ${userData.lastName}`}</h2>
        <h4 className="margin-block-0 grey-color">@{userData.username}</h4>
      </div>
      <div>
        {isCurrentUser ? (
          <button className="follow-unfollow-btn cursor-pointer">
            Edit Profile
          </button>
        ) : isFollowingThisUser ? (
          <button
            className="button-secondary follow-unfollow-btn"
            onClick={() => {
              followUnfollowUser(
                "unfollow",
                userData._id,
                setUser,
                users,
                setUsers
              );
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            className="button-primary follow-unfollow-btn"
            onClick={() => {
              followUnfollowUser(
                "follow",
                userData._id,
                setUser,
                users,
                setUsers
              );
            }}
          >
            Follow
          </button>
        )}
      </div>
      <div className="profile-card-bio">
        {userData.bio.split("|").map((bio) => (
          <p className="margin-block-0 font-weight-medium" key={bio}>
            {bio}
          </p>
        ))}
      </div>
      <div>
        <a
          target="_blank"
          href={"https://" + userData.website}
          rel="noreferrer"
          className="primary-color cursor-pointer no-text-decoration font-weight-bold"
        >
          {userData.website}
        </a>
      </div>
      <div className="flex-row-center following-unfollowing-posts-count-div">
        <div className="flex-column-center follow-unfollow-posts-div">
          <p className="margin-block-0 font-weight-semibold">
            {userData.following.length}
          </p>
          <p className="margin-block-0 font-weight-semibold">Following</p>
        </div>
        <div className="flex-column-center follow-unfollow-posts-div">
          <p className="margin-block-0 font-weight-semibold">{posts.length}</p>
          <p className="margin-block-0 font-weight-semibold">Posts</p>
        </div>
        <div className="flex-column-center follow-unfollow-posts-div">
          <p className="margin-block-0 font-weight-semibold">
            {userData.followers.length}
          </p>
          <p className="margin-block-0 font-weight-semibold">Followers</p>
        </div>
      </div>
      <div>
        <h3 className="text-align-left">Your Posts</h3>
        {posts.map((eachPost) => (
          <PostCard key={eachPost.id} postDetails={eachPost} />
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;
