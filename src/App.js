import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div >
        <Counter />
      </div>
    );
  }
}

export default App;