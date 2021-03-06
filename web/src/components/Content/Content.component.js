import React, { useState, useEffect, useCallback } from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

import styles from './Content.component.style'

const useStyles = styles;

function ContentItem(props) {
  const classes = useStyles();
  const [stance, setStance] = useState('');
  const [option, setOption] = useState([]);
  const [owner, setOwner] = useState([]);
  const [img, setImg] = useState('https://homepages.cae.wisc.edu/~ece533/images/arctichare.png');

  const handleChips = useCallback((item) => {
    if (item.occupation) {
      let tmp = [];
      for (let i = 0; i < props.content.searchBar.filters.occupation.length; i++) {
        for (let j = 0; j < item.occupation.length; j++) {
          if (item.occupation[j].value === props.content.searchBar.filters.occupation[i].id) {
            tmp.push(props.content.searchBar.filters.occupation[i].name);
          }
        }
      }
      setOption(tmp);
    }
    if (item.category) {
      let tmp = [];
      for (let i = 0; i < props.content.searchBar.filters.category.length; i++) {
        for (let j = 0; j < item.category.length; j++) {
          if (item.category[j].value === props.content.searchBar.filters.category[i].id) {
            tmp.push(props.content.searchBar.filters.category[i].name);
          }
        }
      }
      setOption(tmp);
    }
  }, [props])

  useEffect(() => {
    if (props.item.stance) {
      for (let i = 0; i < props.content.searchBar.filters.stance.length; i++) {
        if (props.item.stance === props.content.searchBar.filters.stance[i].id) {
          setStance(props.content.searchBar.filters.stance[i].value);
        }
      }
    }
    switch (props.category) {
      case ("persons"):
        break;
      case ("youtubes"):
        if (props.item.owners) {
          let tmp = [];
          for (let i = 0; i < props.item.owners.length; i++) {
            let obj = {
              id: null,
              name: null,
              stance: null,
              img: ""
            }
            console.log(props.item.owners[i]);
            obj.id = props.item.owners[i].person.id;
            obj.name = props.item.owners[i].person.name;
            obj.img = props.item.owners[i].person.profile;
            for (let j = 0; j < props.content.searchBar.filters.stance.length; j++) {
              if (props.item.owners[i].person.stance === props.content.searchBar.filters.stance[j].id) {
                obj.stance = props.content.searchBar.filters.stance[j].value;
              }
            }
            tmp.push(obj);
          }
          setOwner(tmp);
        }
        break;
      default:
    }
    handleChips(props.item);
    if (props.item.profile) {
      setImg(props.item.profile);
    }
  }, [props, handleChips]);

  return (
    <Grid container direction="row" justify="center" alignItems="center" className={classes.card} style={{ borderLeftColor: stance }}>
      <Hidden only='xs'>
        <Grid item sm={3}>
          <img alt={props.item.name} src={img} className={classes.image} />
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={9} container direction="column" className={classes.content}>
        <Grid item container direction="row" alignItems="center">
          <Hidden only={['sm', 'md', 'lg', 'xl']}>
            <Grid item className={classes.name}>
            <Avatar alt={props.item.name} src={img} className={classes.avatarSizeLarge}/>
            </Grid>
          </Hidden>
          <Grid item>
          <Typography gutterBottom variant="h5" component="h2">
            {props.item.name}
          </Typography>
          </Grid>
        </Grid>
        {
          props.item.subscribe && <Grid item>
            <Typography gutterBottom variant="subtitle2" component="h5">
              訂閱人數： {props.item.subscribe}
            </Typography>
          </Grid>
        }
        <Grid item>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.item.description}
          </Typography>
        </Grid>
        <Grid container direction="row" className={classes.contentChip}>
          <Grid item xs={12} style={{ paddingLeft: 10, paddingBottom: 5 }}>
            <AvatarGroup max={5}>
              {owner.map((item, index) => (
                <Avatar
                  className={classes.contentAvatar}
                  style={{ zIndex: 0, borderColor: item.stance }}
                  key={index}
                  alt={item.name}
                  src={item.img}
                />
              ))}
            </AvatarGroup>
          </Grid>
          <Grid item xs={12}>
            {option.map((item, index) => (
              <Chip
                style={{ margin: 5 }}
                key={index}
                variant="outlined"
                label={item}
                clickable
                color="primary"
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContentItem;