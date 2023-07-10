import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsRocket, BsBookmark } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import NewPostModal from "../post/NewPostModal";
import ProfileSidebarCard from "../profileCard/ProfileSidebarCard";

function Sidebar() {
  const getActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? "700" : "",
    fontSize: isActive ? "large" : "",
    backgroundColor: isActive ? "#f5d0fe" : "",
  });

  return (
    <aside className="flex-column aside-div">
      <div className="flex-column-center justify-space-between height-100">
        <div className="flex-column explore-links-div">
          <NavLink
            to="/home"
            className="flex-row navlink"
            style={getActiveStyle}
          >
            <AiOutlineHome className="github-icons primary-color" /> Home
          </NavLink>
          <NavLink
            to="/explore"
            className="flex-row navlink"
            style={getActiveStyle}
          >
            <BsRocket className="github-icons primary-color" /> Explore
          </NavLink>
          <NavLink
            to="/bookmark"
            className="flex-row navlink"
            style={getActiveStyle}
          >
            <BsBookmark className="github-icons primary-color" /> Bookmark
          </NavLink>
          <NavLink
            to="/profile"
            className="flex-row navlink"
            style={getActiveStyle}
          >
            <AiOutlineUser className="github-icons primary-color" /> Profile
          </NavLink>
          <NewPostModal />
        </div>
        <ProfileSidebarCard />
      </div>
    </aside>
  );
}

export default Sidebar;
