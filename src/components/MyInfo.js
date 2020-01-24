//import React is needed wherever JSX is present
import React from "react";
import ReactDOM from "react-dom";
import ToDoItem from "./ToDoItem";
import ContactCard from "./ContactCard";
import Profiles from "./Profiles";
import Header from "./Header";
//functional (coz function) component
//jsx

//ToDoItem container
function MyInfo() {
  return (
    <div className="contacts">
      {/*<ContactCard
        name="Mr Whiskerson"
        imgUrl="http://placekitten.com/300/200/"
        phone="(302) 332-3030"
        email="whiskers@whiskers.net"
      />
      <ContactCard
        name="Cuntcat"
        imgUrl="http://placekitten.com/400/300/"
        phone="(301) 339-2040"
        email="cunt@cat.com"
      */}
      <Header />
    </div>
  );
}

/*<div className="contacts">
      <ContactCard
        name="Mr Whiskerson"
        imgUrl="http://placekitten.com/300/200/"
        phone="(302) 332-3030"
        email="whiskers@whiskers.net"
      />
      <ContactCard
        name="Cuntcat"
        imgUrl="http://placekitten.com/400/300/"
        phone="(301) 339-2040"
        email="cunt@cat.com"
      />
    </div>*/

//make this func component available to other spaces within the app
export default MyInfo;
