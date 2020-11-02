import Header from "./Components/Navigation";
import Employees from "./Components/Employees/Employees";
import Search from "./Components/Search";
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    alphabetical: false,
    loading: false,
  };

  
  async componentDidMount() {
    const res = await axios.get("https://randomuser.me/api/?results=20");
    this.setState({
      employees: res.data.results,
      filteredEmployees: res.data.results,
    });
  }

  setOriginalEmployees() {
    console.log(this.state.employees)
    this.setState({filteredEmployees: this.state.employees})
  }

  handleSearch = (event) => {
    const filteredEmployee = event.target.value;
    if (filteredEmployee == 0) {
     this.setOriginalEmployees();
    } else {

    const filteredEmployees = this.state.filteredEmployees.filter((employee) => {
      return employee.email.indexOf(filteredEmployee) !== -1;
    });
    // setState REQUIRES a key and a value, so it is important to differentiate between them.
    this.setState({filteredEmployees: filteredEmployees});
  };
}

  // Sorting by email forwards & in reverse
  handleEmailSort = (event) => {
    console.log("clicked within app.js")
    if (this.state.alphabetical == false) {
    const sortAbc = !this.state.alphabetical ? 
    this.state.filteredEmployees.sort(function (a, b) {
      return a.email > b.email ? 1 : -1
    }): 
    this.state.filteredEmployees
    this.setState({filteredEmployees: sortAbc, alphabetical: !this.state.alphabetical})
    console.log(this.state.filteredEmployees)
  } else {
     console.log("You lose")
     const sortZxy = this.state.alphabetical ?
     this.state.filteredEmployees.sort(function(a, b) {
       return a.email < b.email ? 1 : -1
     }): this.state.filteredEmployees
          this.setState({filteredEmployees: sortZxy, alphabetical: !this.state.alphabetical})
    }
  } 


  render() {
    return (
      <div>
        <Header />
        <Search handleSearch={this.handleSearch} />
        <Employees handleEmailSort={this.handleEmailSort} filteredEmployees={this.state.filteredEmployees} />
      </div>
    );
  }
}

export default App;
