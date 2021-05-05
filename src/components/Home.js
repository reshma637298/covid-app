import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          Covid-19 Data-Sheet
        </h2>
        <br />
        <br />
        <br />
        <img
          className="App-logo"
          style={{ textAlign: "center" }}
          src="https://static.toiimg.com/photo/76038210.cms"
        ></img>
        <h3 style={{ marginTop: "100px" }}>All Covid details in one Page </h3>
      </div>
    );
  }
}

export default Home;
