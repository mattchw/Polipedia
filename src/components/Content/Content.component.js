import React, {useState, useEffect} from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Chip from '@material-ui/core/Chip';

import styles from './Content.component.style'

import utilStance from '../../utils/stance'
import utilOccupation from '../../utils/occupation'

const useStyles = styles;

function ContentItem(props) {
    const classes = useStyles();
    const [stance, setStance] = useState('');
    const [occupation, setOccupation] = useState([]);

    useEffect(() => {
      if(props.item.stance){
        for(let i = 0; i<utilStance.length; i++){
          if(props.item.stance==utilStance[i].id){
            setStance(utilStance[i].value);
          }
        }
      }
      if(props.item.occupation){
        let tmp = [];
        for(let i = 0; i<utilOccupation.length; i++){
          for(let j = 0; j<props.item.occupation.length; j++){
            if(props.item.occupation[j]==utilOccupation[i].id){
              tmp.push(utilOccupation[i].name);
            }
          }
        }
        setOccupation(tmp);
      }
    }, []);

    return (
      <Grid container direction="row" justify="center" alignItems="center" className={classes.cardContainer}>
        <Grid item container direction="row" xs={11} className={classes.card}>
          <div className={classes.stance} style={{backgroundColor: stance}}/>
          <Hidden only='xs'>
            <Grid item sm={3}>
              <img alt={props.item.name} src="https://homepages.cae.wisc.edu/~ece533/images/arctichare.png" className={classes.image}/>
            </Grid>
          </Hidden>
          <Grid item xs={11} sm={8} className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.contentText}>
              {props.item.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.contentText}>
              {props.item.description}
            </Typography>
            <Grid container direction="row" className={classes.contentChip}>
              {occupation.map((item, index) => (
                <Grid item key={index} style={{padding: 5}}>
                  <Chip
                  variant="outlined"
                  label={item}
                  clickable
                  color="primary"
                />
                </Grid>
              ))}
            </Grid>
            
          </Grid>
        </Grid>
      </Grid>
    );
}

export default ContentItem;