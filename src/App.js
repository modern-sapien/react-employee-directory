import Header from "./Components/Navigation"
import Employees from "./Components/Employees/Employees"
import Search from "./Components/Search"
import React, { Component } from 'react';
import axios from "axios"

class App extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    loading: false
  }

async componentDidMount() {
  const res = await axios.get("https://randomuser.me/api/?results=20")
  console.log(res.data.results)
  this.setState({employees: res.data.results, filteredEmployees: res.data.results})
}

handleSearch = (event) => {
  console.log(event.target.value)
  let searchEmployee = event.target.value
  const filteredEmployees = this.state.employees.filter(employee => {
  // console.log
    return employee.name.first.indexOf(searchEmployee) !== -1
  })
  this.setState(filteredEmployees)
}

  render() {
    return (
      <div>
      <Header />
      <Search handleSearch={this.handleSearch} />
      <Employees employees={this.state.filteredEmployees}/>
      </div>
    );
  }
}

export default App;

