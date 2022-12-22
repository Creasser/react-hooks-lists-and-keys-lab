import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkComp= links.map((link) => {
    return <a href={`#${link}`} key={link}>{link}</a>
  }) 
  return <nav>{linkComp}</nav>;
}

export default NavBar;
