import React from "react";
//the ReactDOM object is used to render React elements/components inside the real DOM.
import ReactDOM from "react-dom";

//Footer (cap F) vs footer (small f) - Footer is a React component,
//whereas footer is a JSX element. Components RENDER elements.
function Footer() {
  return (
    <footer>
      <h3>This is my footer</h3>
    </footer>
  );
}

export default Footer;
