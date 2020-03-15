import React, { useState, useEffect } from 'react';

import Select from 'react-select';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import style from './SearchBar.style'

import utilStance from '../../utils/stance'
import utilOccupation from '../../utils/occupation'

const useStyles = style;

let options = [];

let stances = [];


function getOptions(){
  for(let i = 0; i<utilStance.length; i++){
    let obj = {
      value: utilStance[i].id, 
      label: utilStance[i].name
    }
    stances.push(obj);
  }
  for(let j = 0; j<utilOccupation.length; j++){
    let obj = {
      value: utilOccupation[j].id, 
      label: utilOccupation[j].name
    }
    options.push(obj);
  }
}

function SearchBar() {
  const classes = useStyles();
  const [selectedOptions, setSelectedOptions] = useState(null);
  const [selectedStances, setSelectedStances] = useState(null);
  const [showOptions, setShowOptions] = useState('none');
  const [showOptionsOpacity, setShowOptionsOpacity] = useState(0);

  const handleChangeOptions = selected => {
    setSelectedOptions(selected);
  };

  const handleChangeStances = selected => {
    setSelectedStances(selected);
  };

  const toggleOptions = () => {
    if (showOptions === 'none') {
      setShowOptions('flex');
      setTimeout(() =>
        setShowOptionsOpacity(1), 100 // something very short
      )
    }
    if (showOptions === 'flex') {
      setShowOptionsOpacity(0);
      setTimeout(() =>
        setShowOptions('none'), 300 // same as transition time
      )
    }
  }

  useEffect(() => {
    getOptions();
  }, []);

  return (
    <Grid container direction="row" justify="center" alignItems="center" className={classes.searchBarContainer}>
      <Grid item xs={10}>
        <Paper className={classes.root}>
            <InputBase
            className={classes.input}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search google maps' }}
            />
            <Divider orientation="vertical" flexItem />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
      </Grid>
      {
        <Grid container item xs={10} direction="row" justify="center" alignItems="flex-start" className={classes.searchBarOptionContainer} 
          style={{
            transition: 'opacity 0.3s ease',
            opacity: showOptionsOpacity,
            display: showOptions,
          }}
        >
            <Grid item xs={12} md={4} className={classes.searchBarOption}>
            <Select
                isMulti
                closeMenuOnSelect={false}
                value={selectedStances}
                onChange={handleChangeStances}
                options={stances}
                placeholder="立場"
              />
          </Grid>
          <Grid item xs={12} md={8} className={classes.searchBarOption}>
            <Select
              isMulti
              closeMenuOnSelect={false}
              value={selectedOptions}
              onChange={handleChangeOptions}
              options={options}
              placeholder="Options"
            />
          </Grid>  
      </Grid>
      }
      
      <Grid container direction="row" justify="center" alignItems="flex-start" className={classes.searchBarOptionButton}>
          <Button variant="contained" size="small" color="secondary" onClick={toggleOptions}>
            {
              (showOptions==='flex') ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>
            }
          </Button>
      </Grid>
    </Grid>
  );
}

export default SearchBar;