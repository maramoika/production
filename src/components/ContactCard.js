import React, { Component } from "react";
import ReactDOM from "react-dom";

function ContactCard(props) {
  //this component contains four pieces of dynamic information - props.
  console.log("Props: ", { props });
  return (
    <div className="contact-card">
      <img src={props.imgUrl} />
      <h3>{props.name}</h3>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default ContactCard;
