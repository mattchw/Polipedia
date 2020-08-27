import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Footer from '../components/Footer/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Coming soon</h1>
      <Footer />
    </div>
  );
}

export default About;