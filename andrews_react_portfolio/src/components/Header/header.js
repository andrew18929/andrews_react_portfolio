import React, { useState } from "react";
import NavTabs from "../NavTabs";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import PortfolioContainer from "../PortfolioContainer";
import Resume from "../Resume";

// may need to import helper.js?

const Header = () => {
  const [currentPage, handlePageChange] = useState("About Me");

  const displayPage = () => {
    switch (currentPage) {
      case "About Me":
        return <AboutMe />;
      case "Contact Me":
        return <Contact />;
      case "Portfolio":
        return <PortfolioContainer />;
      case "Resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <header className="App-header hero">
        <h1>Andrew Martinez</h1>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </header>
      <div className="main">{displayPage(currentPage)}</div>
    </div>
  );
};

export default Header;
