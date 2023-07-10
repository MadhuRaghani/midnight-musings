import React from "react";
import { Link, useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-column flex-grow-1 justify-center">
      <div className="flex-row-center justify-space-evenly">
        {/* left div */}
        <div className="flex-column-center-center">
          <div className="text-align-left align-self-start">
            <span className="app-name home-app-name">Midnight Musings</span>
          </div>
          <div className="text-align-left">
            <p className="uppercase">
              <span className="font-size-xxlarge">Follow</span>
              <span className="font-weight-bold font-size-smaller">
                {" "}
                People Around The Globe
              </span>
            </p>
            <p className="uppercase">
              <span className="font-size-xxlarge">Connect</span>
              <span className="font-weight-bold font-size-smaller">
                {" "}
                With Your Friends
              </span>
            </p>
            <p className="uppercase">
              <span className="font-size-xxlarge">Share</span>
              <span className="font-weight-bold font-size-smaller">
                {" "}
                What You Thinking
              </span>
            </p>
          </div>
          <div className="width-100">
            <button
              className="button-primary width-100 font-size-large"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Join Now
            </button>
            <p className="primary-color font-weight-semibold">
              Already have an account?{" "}
              <Link className="font-weight-bold primary-color" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
        {/* right div */}
        <div>
          <img
            // src="https://res.cloudinary.com/djbnm7p4c/image/upload/v1688986341/avatars/hero-1_irgrsn.jpg "
            // src="https://res.cloudinary.com/djbnm7p4c/image/upload/v1688986532/avatars/hero-2_af9vgg.jpg"
            // src="https://res.cloudinary.com/djbnm7p4c/image/upload/v1688986630/avatars/hero-3_xsnu66.png"
            // src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            src="https://res.cloudinary.com/djbnm7p4c/image/upload/v1688986858/avatars/hero-image_bdzcil.avif"
            alt="hero-img"
            className="cursor-pointer"
            style={{ height: "25rem", width: "40rem" }}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
