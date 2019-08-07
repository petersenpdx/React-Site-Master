import React, { Component } from 'react';
import './App.css';
import Sidebar2 from './components/sidebar2'


class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar2></Sidebar2>
      	</div>
      </div>
    );
  }
}

export default App;
