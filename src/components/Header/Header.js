import React from 'react';
import './Header.css'

import styles from './Header.style'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { Link } from 'react-router-dom';

import { Link as ScrollLink} from 'react-scroll'

const useStyles = styles;

function Header() {
  const classes = useStyles();

  return (
    <Container maxWidth='xl' className="header">
      <Grid container direction="column" justify="center" alignItems="center" className={classes.containerItem}>
        <Grid item>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            流水鑑
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            「黃藍是政見，黑白是良知」
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            呢個圖鑑目的係令你認清一個人、youtube channel⋯⋯，令你發現一直敬仰嘅人原來支持政府、警察；沉默低調嘅人原來支持學生、示威者。
          </Typography>
        </Grid>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Link to="/explore?category=persons" className={classes.link}>
            <Button variant="contained" color="primary" style={{margin: 'auto 5px'}}>
              開始
            </Button>
            </Link>
            <ScrollLink activeClass="active" to="intro" spy={true} smooth={true} duration={500} >
              <Button variant="contained" color="secondary" style={{margin: 'auto 5px'}}>
                原則
              </Button>
            </ScrollLink>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;