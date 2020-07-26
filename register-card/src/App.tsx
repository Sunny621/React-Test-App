import React, { Component } from 'react';
import './App.scss';
import RegisterForm from './components/registerForm';
import { connect } from 'react-redux';

interface IProps {
  isMenuOpen: boolean
}

class App extends Component<IProps> {
  render() {
    const { isMenuOpen } = this.props;
    return (
      <div className="App">
        <RegisterForm isMenuOpen={isMenuOpen} userName="Tester User" />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const { isMenuOpen } = state.registerReducer;
  return {
    isMenuOpen
  }
}

export default connect(mapStateToProps)(App);
