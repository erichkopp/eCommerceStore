import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="footerLeft">
        <ul>
          {Object.keys(props.footerLeftLinks).map((link) => (
            <li>
              <Link>{props.footerLeftLinks[link].text}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="footerRight">
        {Object.keys(props.footerRightLinks).map((link) => (
          <a
            href={props.footerRightLinks[link].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class={props.footerRightLinks[link].icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
}
