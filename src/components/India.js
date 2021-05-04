import React, { Component } from "react";
import { Card } from "react-bootstrap";
import State from "./State";
import Axios from "axios";

class India extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    Axios.get("https://corona.lmao.ninja/v2/countries/india").then(
      (response) => {
        this.setState({ data: response.data });
      }
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <img
            src="https://disease.sh/assets/img/flags/in.png"
            width="100px"
            height="100px"
          />
          <h2>INDIA</h2>
        </div>
        <div className="col-md-12">
          <div className="row" style={{ width: "100%" }}>
            <div className="col-md-3">
              <Card className="badge badge-info" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>TOTAL CASES</Card.Title>
                  <h3>{this.state.data.cases}</h3>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3">
              <Card className="badge badge-warning" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>ACTIVE CASES</Card.Title>
                  <h3>{this.state.data.active}</h3>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3">
              <Card className="badge badge-success" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>RECOVERED CASES</Card.Title>
                  <h3>{this.state.data.recovered}</h3>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3">
              <Card className="badge badge-danger" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>DEATH</Card.Title>
                  <h3>{this.state.data.deaths}</h3>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <State />
        </div>
      </div>
    );
  }
}

export default India;
