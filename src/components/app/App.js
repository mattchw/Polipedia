import React, { useState, useEffect } from 'react';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './App.css';

import Home from '../../route/Home'
import Explore from '../../route/Explore'
import Encourage from '../../route/Encourage'
import About from '../../route/About'
import NavBar from '../NavBar/NavBar'

const theme = createMuiTheme({
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

function App() {

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <NavBar>
            <Switch>
              <Route exact component={Home} path="/" />
              <Route exact component={Explore} path="/explore" />
              <Route exact component={Encourage} path="/encourage" />
              <Route exact component={About} path="/about" />
            </Switch>
          </NavBar>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
