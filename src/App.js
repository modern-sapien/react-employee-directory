import Header from "./Components/Navigation"
import React, { Component } from 'react';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  render() {
    return (
      <>
      <Header />
      <h1>This is the main app component</h1>
      </>
    );
  }
}

export default App;

