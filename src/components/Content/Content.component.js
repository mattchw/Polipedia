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
    const [img, setImg] = useState('https://homepages.cae.wisc.edu/~ece533/images/arctichare.png');

    useEffect(() => {
      if(props.item.stance){
        for(let i = 0; i<utilStance.length; i++){
          if(props.item.stance===utilStance[i].id){
            setStance(utilStance[i].value);
          }
        }
      }
      if(props.item.occupation){
        let tmp = [];
        for(let i = 0; i<utilOccupation.length; i++){
          for(let j = 0; j<props.item.occupation.length; j++){
            if(props.item.occupation[j].value===utilOccupation[i].id){
              tmp.push(utilOccupation[i].name);
            }
          }
        }
        setOccupation(tmp);
      }
      if(props.item.profile){
        setImg(props.item.profile);
      }
    }, [props]);

    return (
      <Grid container direction="row" justify="center" alignItems="center" className={classes.card} style={{borderLeftColor: stance}}>
        <Hidden only='xs'>
          <Grid item sm={3}>
            <img alt={props.item.name} src={img} className={classes.image}/>
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={9} container direction="column" className={classes.content}>
          <Grid item>
          <Typography gutterBottom variant="h5" component="h2">
              {props.item.name}
            </Typography>
          </Grid>
          <Grid item>
          <Typography variant="body2" color="textSecondary" component="p">
              {props.item.description}
            </Typography>
          </Grid>
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
    );
}

export default ContentItem;