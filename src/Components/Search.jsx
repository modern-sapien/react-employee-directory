import React, { Component } from "react";

// change to stateless function

class Search extends Component {
  render() {
    return (
      <div className="container">
        <div className="row"></div>
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <input onChange={(event) => this.props.handleSearch(event)} />
        </div>
        <div className="col-sm-2"></div>
      </div>
    );
  }
}

export default Search;
