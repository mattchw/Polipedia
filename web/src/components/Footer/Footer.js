import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import icon from '../../assets/images/icon.png'
import Grid from '@material-ui/core/Grid';

import styles from './Footer.style'

function Copyright() {
  return (
    <Typography variant="body1" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mattwong.info/">
        Matthew Wong
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = styles;

function Footer(props) {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Container maxWidth="md">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={4} container direction="row" justify="center" alignItems="center">
              <Grid item xs={12} sm={3}>
                <img src={icon} alt="icon" style={{width: 50, height: 50}}/>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Typography variant="body1">BeWater</Typography>
              </Grid>
            </Grid>
            
            <Grid item xs={8}>
              <Copyright />
            </Grid>
          </Grid>
        </Container>
      </footer>
  );
}

export default Footer;