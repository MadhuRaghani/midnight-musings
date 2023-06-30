import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="flex-column flex-grow-1 justify-center">
      <div className="flex-row-center justify-space-evenly">
        {/* left div */}
        <div className="flex-column-center">
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
            {/* <Link to="/signup"> */}
            <button className="button-primary width-100 font-size-large">
              Join Now
            </button>
            {/* </Link> */}
            <p className="primary-color font-weight-semibold">
              Already have an account?{" "}
              <Link className="font-weight-bold primary-color" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
        {/* right div */}
        <div>Hero Image</div>
      </div>
    </div>
  );
}

export default LandingPage;
