import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialID } from "../constants";

const SocialMedia = () => {
  return (
    <div className="app__social">
      {socialID.map((item, index) => (
        <div key={item + index}>
          <a href={item.iconUrl} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
