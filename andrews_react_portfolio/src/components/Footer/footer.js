import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <a href="https://github.com/andrew18929" target="_blank">
              <span>
                <i className="fab fa-github fa-2x"></i>
              </span>
            </a>
          </li>

          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/andrew-martinez-03144b192"
              target="_blank"
            >
              <span>
                <i className="fab fa-linkedin fa-2x"></i>
              </span>
            </a>
          </li>

          <li className="nav-item">
            <a href="mailto: andrewmartinez6313@gmail.com" target="_blank">
              <span>
                <i className="fas fa-envelope fa-2x"></i>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
