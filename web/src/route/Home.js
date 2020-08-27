import React from 'react';
import Header from '../components/Header/Header'
import Intro from '../components/Intro/Intro'
import Example from '../components/Example/Example'
import Footer from '../components/Footer/Footer'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header content={props.content.header}/>
      <Intro content={props.content.intro}/>
      <Example content={props.content.example} filters={props.filters}/>
      <Footer/>
    </div>
  );
}

export default Home;