import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map(link => <a key={link} href={`#${link}`}>{link}</a>)}</nav>;
}

export default NavBar;

// [X] - In the `NavBar` component, there is an array with three strings representing
// each link on the page. For each of those strings, create an `<a>` tag that looks
// like this:

// ```jsx
// <a href="#home">home</a>
// ```

// Make sure each `<a>` element also gets a unique `key` prop. 