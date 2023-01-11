import React from "react";
import { pageLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map(({ href, text, id }) => {
          return (
            <li key={id}>
              <a href={text} rel="noreferrer" className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { href, id, icon } = link;
          return (
            <li key={id}>
              <a href={href} target="_blank" rel="noreferrer" className="footer-icon">
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
