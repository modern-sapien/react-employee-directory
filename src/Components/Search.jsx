import React, { Component } from "react";

// change to stateless function

class Search extends Component {
  render() {
    return (
      <div className="container">
        <div className="row"></div>
        <div className="col-12 container-fluid">
          <input onChange={(event) => this.props.handleSearch(event)} />
        </div>
      </div>
    );
  }
}

export default Search;
