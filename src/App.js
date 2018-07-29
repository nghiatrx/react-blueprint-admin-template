import React, { Component } from 'react';
import MenuComponents from './components/MenuComponent'
import '../node_modules/normalize.css/normalize.css'
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css'
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuComponents/>
      </div>
    );
  }
}

export default App;
