import React, { Component } from "react";
import Axios from "axios";

class World extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    Axios.get("https://corona.lmao.ninja/v2/countries").then((response) => {
      this.setState({ data: response.data });
    });
    console.log(this.state.data);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <table className="table table bordered table-striped">
            <thead className="btn-primary">
              <tr>
                <td>Countries</td>
                <td>Active Cases</td>
                <td>Recovered</td>
                <td>Deaths</td>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((itm, ky) => {
                return (
                  <tr>
                    <td>{itm.country}</td>
                    <td>{itm.cases}</td>
                    <td>{itm.recovered}</td>
                    <td>{itm.deaths}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default World;
