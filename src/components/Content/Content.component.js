import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';

import styles from './Content.component.style'

const useStyles = styles;

function ContentItem(props) {
    const classes = useStyles();

    return (
      <Grid container direction="row" justify="center" alignItems="center" className={classes.cardContainer}>
        <Grid item container direction="row" xs={11} className={classes.card}>
          <div className={classes.stance} style={{backgroundColor: 'black'}}/>
          <Hidden only='xs'>
            <Grid item sm={3}>
              <img alt={props.item.name} src="https://homepages.cae.wisc.edu/~ece533/images/arctichare.png" className={classes.image}/>
            </Grid>
          </Hidden>
          <Grid item xs={11} sm={8} >
            <Typography gutterBottom variant="h5" component="h2" className={classes.content}>
              {props.item.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
              {props.item.description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
}

export default ContentItem;