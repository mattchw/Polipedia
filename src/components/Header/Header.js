import React, { useState, useEffect } from 'react';
import './Header.css'

import styles from './Header.style'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = styles;


function Header() {
  const classes = useStyles();

  return (
    <Container maxWidth='xl' className={classes.container} className="header">
      <Grid container direction="column" justify="center" alignItems="center" className={classes.containerItem}>
        <Grid item>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            流水鑑
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
              黃藍是政見，黑白是良知。
          </Typography>
        </Grid>
        <Grid container spacing={2} justify="center">
          <Grid item >
            <Button variant="contained" color="primary">
              開始
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;