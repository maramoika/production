import React from "react";
//the ReactDOM object is used to render React elements/components inside the real DOM.
import ReactDOM from "react-dom";
import MyInfo from "./MyInfo";

//Footer (cap F) vs footer (small f) - Footer is a React component,
//whereas footer is a JSX element. Components RENDER elements.
function MainContent() {
  const styles = { color: "#FFCCCC", backgroundColor: "black" };
  const date = new Date();

  return (
    <div>
      <MyInfo />
    </div>
  );
}

export default MainContent;
