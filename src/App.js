import Header from "./Components/Navigation"
import Employees from "./Components/Employees/Employees"
import React, { Component } from 'react';

class App extends Component {
  state = {
    employees: [
      {name: "jim",
      image: "here is a link",
      username: "jimbo",
      email: "jim@jimmail.com",
      github: "http://wwww.github.com/users/jimbo",
      id: 2}],
    loading: false
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

