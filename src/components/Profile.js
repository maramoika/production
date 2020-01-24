import React, { Component } from "react";
import ReactDOM from "react-dom";

//https://www.youtube.com/watch?v=UAssn1S0UkU

{
  /* this component renders data from the Profiles component. 
    how, you saymasay? ligma.
    
    We're going to pass the profile in as a prop to the this component, so it can be used here. This is achieved by THIS.PROPS.profile.name etc. 
  
  */
}
class Profile extends React.Component {
  render() {
    return (
      <div style={{ padding: 19 }}>
        <div class="imgDiv">
          <img
            src="http://uploads.mixer.com/avatar/jf7qalfa-8499245.jpg"
            style={{ width: 150, height: 150 }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              paddingLeft: 40
            }}
          >
            <h4>{this.props.profile.name}</h4>

            <p>
              Age: {this.props.profile.age}
              <br />
              Bio: {this.props.profile.bio}
            </p>
          </div>
        </div>
      </div>
    ); //return main
  } //render
} //component

export default Profile;
