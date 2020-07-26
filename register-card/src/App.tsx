import React, { Component } from 'react';
import './App.scss';
import RegisterForm from './components/registerForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RegisterForm/>
      </div>
    );
  }
}

export default App;
