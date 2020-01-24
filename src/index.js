//https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2

//pint to remember - everything is ultimately translated to HTML. EQUIVALENCE: each program statement translates to a certain number of actions at machine level.

//'react' is the module, and React is the object imported from that module.
// React uses hot module reloading - whenever changes are saved, the app
// is automatically restarted.
import React from "react";
//the ReactDOM object is used to render React elements/components inside the real DOM.
import ReactDOM from "react-dom";

//import MyInfo from "./components/MyInfo";
import App from "./App";

//the <h1>Hello cunt</h1> JSX expression results in a React element, 'element',
//which is part of the virtual DOM. Remember that when the state changes, virtual //DOM will compare the new state to the previous state, and it'll then reach out to the real browswer DOM and update it accordingly.
//const element = <h1>Hello cunt</h1>;

//the console will show the output of the above JSX expression.
// the 'element' object is part of the virtual DOM, not the real browser DOM.
//console.log(element);

//the first arg of ReactDOM's render() method is the 'element' object we want to render.
//the second arg of render() is the location of the DOM element in the real DOM where we want to render the 'element' object. Because the element is in the real DOM, we use vanilla JS to obtain a reference to that DOM element.
//why html within js? coz this is a JSX expression. this is why the
//'import React' is needed - coz the React library enables JSX interpreter.
ReactDOM.render(
  //jsx tag - self-closing component. SCC means no children elements.
  <App />,
  document.getElementById("root")
);

/*The React example never actually touches an element. it simply declares an element should be rendered given our current state. It does not actually manipulate the DOM itself */
