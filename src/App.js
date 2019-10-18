import React, { Component } from 'react';
import Component1 from './functional/component1'
import Container1 from './containers/container1'
import Routes from './routes'


class App extends Component {

  render() {
    
    return (
      <div className="App">
        React
        <Routes />
      </div>
    );
  }
}


export default App;
