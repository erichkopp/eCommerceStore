import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerLeft">
        <ul>
          <li>TERMS AND CONDITIONS</li>
          <li>FAQ</li>
          <li>ABOUT</li>
          <li>PRIVACY POLICY</li>
        </ul>
      </div>
      <div className="footerRight">
        <a
          href="https://codesandbox.io/s/hksch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fas fa-code"></i>
        </a>
        <a
          href="https://github.com/erichkopp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/erich-kopp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
    </div>
  );
}
