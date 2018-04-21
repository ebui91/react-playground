import React, { Component } from 'react';
import router from './router';
import './App.css';
import { Link } from 'react-router-dom';
import PropsChildren from './components/props.children/propsChildren';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to React Playground!</h1>

        <Link to='/props_children'>props.children</Link>
        <Link to='/hoc'>Higher Order Components</Link>
        
        { router }
      </div>
    );
  }
}

export default App;
