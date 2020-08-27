import React from 'react';
import './Header.css'

import styles from './Header.style'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { Link } from 'react-router-dom';

import { Link as ScrollLink } from 'react-scroll'

const useStyles = styles;

function Header(props) {
  const classes = useStyles();

  return (
    <Container maxWidth='xl' className="header">
      <Grid container direction="column" justify="center" alignItems="center" className={classes.containerItem}>
        <Grid item>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          {props.content.title1}
            <span style={{color:'#5780b3'}}>{props.content.title2}</span>
            {props.content.title3}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            {props.content.description1}
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            {props.content.description2}
          </Typography>
        </Grid>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Link to="/explore?category=persons" className={classes.link}>
              <Button variant="contained" color="primary" style={{ margin: 'auto 5px' }}>
                {props.content.button1}
              </Button>
            </Link>
            <ScrollLink activeClass="active" to="intro" spy={true} smooth={true} duration={500} >
              <Button variant="contained" color="secondary" style={{ margin: 'auto 5px' }}>
                {props.content.button2}
              </Button>
            </ScrollLink>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;