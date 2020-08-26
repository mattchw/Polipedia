import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { useSelector } from 'react-redux';
import { getLang } from '../../reducers/generalReducer';

import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import './App.css';

import content from '../../utils/content'
import utilStance from '../../utils/stance'
import utilOccupation from '../../utils/occupation'
import utilCategory from '../../utils/category'

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
  const lang = useSelector(getLang);
  let contentLang = content.en;
  
  switch(lang){
    case "en":
      contentLang = content.en;
      // filter
      contentLang.explore.searchBar.filters.stance = utilStance.en;
      contentLang.explore.searchBar.filters.occupation = utilOccupation.en;
      contentLang.explore.searchBar.filters.category = utilCategory.en;
      break;
    case "zht":
      contentLang = content.zht;
      // filter
      contentLang.explore.searchBar.filters.stance = utilStance.zht;
      contentLang.explore.searchBar.filters.occupation = utilOccupation.zht;
      contentLang.explore.searchBar.filters.category = utilCategory.zht;
      break;
    default:
      break;
  }

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <NavBar content={contentLang.navbar}>
            <Switch>
              <Route exact path="/" component={() => <Home content={contentLang.home} />}/>
              <Route exact path="/explore" component={(props) => <Explore content={contentLang.explore} {...props}/>}/>
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
