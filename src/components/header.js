import headShot from "./../images/profilepic.jpg";
import Components from "./index";
import { useState } from "react";

function Header() {
  let [navPage, setNavPage] = useState("home");

  function clickHandler(destination) {
    return () => setNavPage(destination);
  }

  function NavButton(clickText, displayText) {
    if (clickText === navPage)
      return (
        <button onClick={clickHandler(`${clickText}`)} disabled>
          {displayText}
        </button>
      );

    return (
      <button onClick={clickHandler(`${clickText}`)}>{displayText}</button>
    );
  }

  return (
    <>
      <header>
        <h1 className="header-title">Eric B. Davis</h1>
        <nav>
          {NavButton("about-me", "About Me")}
          {NavButton("recent-projects", "Recent Projects")}
          {NavButton("contact-me", "Contact Me")}
        </nav>
      </header>
      <main>
        <div className="banner">
          <img  src={headShot}/>
        </div>
        {navPage === "about-me" ? (
          <Components.AboutMe />
        ) : navPage === "recent-projects" ? (
          <Components.RecentProjects />
        ) : navPage === "contact-me" ? (
          <Components.ContactMe />
        ) : (
          <Components.Home />
        )}
        <Components.Footer />
      </main>
    </>
  );
}

export default Header;
