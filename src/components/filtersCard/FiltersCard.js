import React from "react";
import { useState } from "react";
import { AiOutlineControl } from "react-icons/ai";

function FiltersCard({ sortBy, setSortBy }) {
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <div className="flex-row">
      <div className="filters-dropdown width-100">
        <div className="flex-row  justify-space-between width-100 padding-1">
          <h1 className="margin-block-0 primary-color">
            {sortBy === ""
              ? "Your "
              : sortBy === "trending"
              ? "Trending "
              : "Latest "}
            Posts
          </h1>
          <AiOutlineControl
            className="github-icons big-icons primary-color cursor-pointer"
            onClick={() => {
              setOpenDropDown((prev) => !prev);
            }}
          />
        </div>
        <div
          className="filters-dropdown-content"
          style={{ display: openDropDown ? "block" : "none" }}
        >
          <p
            onClick={() => {
              setOpenDropDown(false);
              setSortBy("trending");
            }}
          >
            Trending
          </p>
          <p
            onClick={() => {
              setOpenDropDown(false);
              setSortBy("latest");
            }}
          >
            Latest
          </p>
        </div>
      </div>
    </div>
  );
}

export default FiltersCard;
