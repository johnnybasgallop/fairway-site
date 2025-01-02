import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex flex-row space-x-6 px-2">
      {/* Instagram */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-green-600 text-2xl"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-green-600 text-2xl"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>

      {/* X (Twitter) */}
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-green-600 text-2xl"
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default Socials;
