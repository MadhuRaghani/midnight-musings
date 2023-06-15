import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { RxTwitterLogo, RxLinkedinLogo } from "react-icons/rx";

function Footer() {
  return (
    <footer className="footer">
      <p className="margin-block-0">
        Made with <AiOutlineHeart className="github-icons" /> by Madhu
      </p>
      <ul className="list-non-bullet unordered-list-center margin-block-xs">
        <li className="list-item-inline">
          <a
            target="_blank"
            href="https://github.com/RaghaniMadhu"
            rel="noreferrer"
          >
            <BsGithub className="footer-icons github-icons" />
          </a>
        </li>
        <li className="list-item-inline">
          <a
            target="_blank"
            href="https://twitter.com/MadhuRaghani"
            rel="noreferrer"
          >
            <RxTwitterLogo className="footer-icons github-icons" />
          </a>
        </li>
        <li className="list-item-inline">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/madhu-raghani-28541a132/"
            rel="noreferrer"
          >
            <RxLinkedinLogo className="footer-icons github-icons" />
          </a>
        </li>
      </ul>
      <span>© No Copyright, Feel free to replicate.</span>
    </footer>
  );
}

export default Footer;
