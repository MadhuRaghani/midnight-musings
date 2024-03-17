import React from "react";
import { BsGithub } from "react-icons/bs";
import { TfiHeart } from "react-icons/tfi";
import { RxTwitterLogo, RxLinkedinLogo } from "react-icons/rx";

function Footer() {
  return (
    <footer className="footer">
      <p className="margin-block-0">
        Made with <TfiHeart className="github-icons" /> by Madhu
      </p>
      <ul className="list-non-bullet unordered-list-center margin-block-xs">
        <li className="list-item-inline">
          <a
            target="_blank"
            href="https://github.com/MadhuRaghani"
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
            href="https://www.linkedin.com/in/madhuraghani/"
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
