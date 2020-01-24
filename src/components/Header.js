import React from "react";
//the ReactDOM object is used to render React elements/components inside the real DOM.
import ReactDOM from "react-dom";

//Footer (cap F) vs footer (small f) - Footer is a React component,
//whereas footer is a JSX element. Components RENDER elements.
function Header() {
  return (
    <header className="header">
      <h3>Shit to do</h3>
    </header>
  );
}

export default Header;
