import React, { useState, useEffect } from 'react';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import './App.css';

import Home from '../../route/Home'
import Explore from '../../route/Explore'
import Encourage from '../../route/Encourage'
import About from '../../route/About'
import NavBar from '../NavBar/NavBar'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#313d4c',
    },
    secondary: {
        main: '#d8d8d8'
      }
    }
  },
)
theme = responsiveFontSizes(theme);

function App() {

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <NavBar>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/explore" component={Explore}/>
              <Route exact path="/encourage" component={Encourage}/>
              <Route exact path="/about" component={About}/>
            </Switch>
          </NavBar>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
