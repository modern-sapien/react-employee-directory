import Header from "./Components/Navigation"
import Employees from "./Components/Employees/Employees"
import React, { Component } from 'react';

class App extends Component {
  state = {
    employees: [],
    loading: false
  }
  render() {
    return (
      <>
      <Header />
      <Employees employees={this.state.employees}/>
      </>
    );
  }
}

export default App;

