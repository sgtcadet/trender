import React, { Component } from 'react';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import TopTrending from '../../containers/TopTrending';
import { Link } from 'react-router-dom';
import Main from '../Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Link className="white" to="/">
            <FontAwesomeIcon icon="fire"/>
            Trender
            </Link>
            
            <Link className="white setting-container" to="/settings">
              <FontAwesomeIcon icon="cog" />
            </Link>
          </h1>
        </header>
        <Main />
        {/*<TopTrending />*/}
      </div>
    );
  }
}

export default App;
