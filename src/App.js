import Header from "./Components/Navigation"
import Employees from "./Components/Employees/Employees"
import React, { Component } from 'react';
import axios from "axios"

class App extends Component {
  state = {
    employees: [
],
    loading: false
  }

async componentDidMount() {
  const res = await axios.get("https://randomuser.me/api/?page=3&results=20")
  console.log(res.data.results)
  this.setState({employees: res.data.results})
  console.log("-----------------")
}

  render() {
    return (
      <div>
      <Header />
      <Employees employees={this.state.employees}/>
      </div>
    );
  }
}

export default App;

