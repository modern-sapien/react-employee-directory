import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 text-center">
              <h1 className="my-3 text-white">Employee Directory</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <p className="font-weight-bolder text-white">
                Click on carrots to filter by heading or use the search box to
                narrow your results.
              </p>
            </div>
          </div>  
        </div>
        <div className="bg-warning container-fluid border-break"> </div>
      </div>
    );
  }
}

export default Header;
