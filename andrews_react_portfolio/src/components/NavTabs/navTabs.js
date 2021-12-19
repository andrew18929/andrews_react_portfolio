import React from "react";

const NavTabs = (props) => {
  const tabs = ["About Me", "Contact Me", "Portfolio", "Resume"];

  return (
    <nav>
      <ul className="nav">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab}>
            <span
              onClick={() => props.handlePageChange(tab)}
              className={props.currentPage === tab ? "navActive" : ""}
            >
              {tab}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavTabs;
