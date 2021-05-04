import React, { Component } from "react";
import Axios from "axios";
import { Accordion, Card, Button } from "react-bootstrap";

class State extends Component {
  constructor() {
    super();
    this.state = {
      stateData: {},
    };
  }

  componentDidMount() {
    Axios.get("https://api.covid19india.org/state_district_wise.json").then(
      (response) => {
        this.setState({ stateData: response.data });
        console.log(this.state.stateData);
      }
    );
  }
  render() {
    let keys = Object.keys(this.state.stateData);
    console.log(keys);
    return (
      <div className="row">
        <div className="col-md-12">
          <Accordion>
            {keys.map((itm, k) => {
              let districtInfo = this.state.stateData[itm].districtData;
              let districtsKeys = Object.keys(districtInfo);

              let totalConfirmed = 0;
              let totalActive = 0;
              let totalRecover = 0;
              let totalDeaths = 0;
              let districtList = [];
              for (let x in districtInfo) {
                totalActive += districtInfo[x].active;
                totalConfirmed += districtInfo[x].confirmed;
                totalRecover += districtInfo[x].recovered;
                totalDeaths += districtInfo[x].deceased;
                let ob = districtInfo[x];
                ob["districtName"] = x;
                districtList.push(ob);
              }
              console.log(districtList);

              return (
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="none" eventKey={k}>
                      {itm}{" "}
                      <span className="btn btn-outline-secondary p-1 mr-1">
                        Total Cases- {totalConfirmed}
                      </span>
                      <span className="btn btn-outline-secondary p-1 mr-1">
                        Total active- {totalActive}
                      </span>
                      <span className="btn btn-outline-secondary p-1 mr-1">
                        Total Recovered- {totalRecover}
                      </span>
                      <span className="btn btn-outline-secondary p-1 mr-1">
                        Total Deaths- {totalDeaths}
                      </span>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={k}>
                    <Card.Body>
                      <table className="table table-bordered table-striped ">
                        <thead className="btn-primary">
                          <tr>
                            <td>District</td>
                            <td>Confirmed</td>
                            <td>Active</td>
                            <td>Recovered</td>
                            <td>Deaths</td>
                          </tr>
                        </thead>
                        <tbody>
                          {districtList.map((itm, k) => {
                            return (
                              <tr>
                                <td>{itm.districtName}</td>
                                <td>{itm.confirmed}</td>
                                <td>{itm.active}</td>
                                <td>{itm.recovered}</td>
                                <td>{itm.deceased}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              );
            })}
          </Accordion>
        </div>
      </div>
    );
  }
}

export default State;
