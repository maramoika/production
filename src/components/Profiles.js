import React, { Component } from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile";

//https://www.youtube.com/watch?v=UAssn1S0UkU
//https://www.youtube.com/watch?v=DJtI3Pogd88
//https://www.youtube.com/watch?v=DLX62G4lc44

class Profiles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      top_profiles: [
        { name: "EM", age: 30, bio: "is engineer man " },
        { name: "DM", age: 34, bio: "is super fuck you man " },
        { name: "Dimitri", age: 38, bio: "is a mid-weight React developer " }
      ],
      other_profiles: [
        { name: "Profile 1", age: 20, bio: "is prof 1" },
        { name: "Profile 2", age: 22, bio: "is prof 2" },
        { name: "Profile 3", age: 24, bio: "is prof 3" },
        { name: "Profile 4", age: 25, bio: "is prof 4" },
        { name: "Profile 5", age: 29, bio: "is prof 5" }
      ],

      crap_profiles: [
        { name: "Crap Profile 1", age: 29, bio: "is crap prof 1" },
        { name: "Crap Profile 2", age: 67, bio: "is crap prof 2" },
        { name: "Crap Profile 3", age: 21, bio: "is crap prof 3" },
        { name: "Crap Profile 4", age: 36, bio: "is crap prof 4" },
        { name: "Crap Profile 5", age: 45, bio: "is crap prof 5" }
      ]
    };
  } //constructor

  render() {
    return (
      <div style={{ padding: 10 }}>
        <h3>Top Profiles</h3>
        {this.state.top_profiles.map(profile => (
          <Profile profile={profile} />
        ))}
        <h3>Other Profies</h3>
        {this.state.other_profiles.map(profile => (
          <Profile profile={profile} />
        ))}
        <h3>Crap Profiles</h3>
        {this.state.crap_profiles.map(profile => (
          <Profile profile={profile} />
        ))}
      </div>
    ); //return main
  } //render
} //component

export default Profiles;
