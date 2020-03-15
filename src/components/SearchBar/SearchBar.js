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

const useStyles = style;

const options = [
  { value: 1, label: 'Chocolate' },
  { value: 2, label: 'Strawberry' },
  { value: 3, label: 'Vanilla' },
  { value: 4, label: '1dedewdewdewdew' },
  { value: 5, label: '2dedewdewdwdwdewdwdewde' },
  { value: 6, label: '3dewdewdewdwedew' },
];

const stances = [
  { value: 'yellow', label: 'Yellow' },
  { value: 'blue', label: 'Blue' },
  { value: 'unknown', label: 'Unknown' },
];

function SearchBar() {
  const classes = useStyles();
  const [selectedOptions, setSelectedOptions] = useState(null);
  const [selectedStances, setSelectedStances] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleChangeOptions = selected => {
    setSelectedOptions(selected);
  };

  const handleChangeStances = selected => {
    setSelectedStances(selected);
  };

  const triggerOptions = () => {
    setShowOptions(!showOptions);
  }

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
        showOptions && <Grid container item xs={10} direction="row" justify="center" alignItems="flex-start" className={classes.searchBarOptionContainer}>
            <Grid item xs={12} sm={4} className={classes.searchBarOption}>
            <Select
                isMulti
                closeMenuOnSelect={false}
                value={selectedStances}
                onChange={handleChangeStances}
                options={stances}
                placeholder="Stance"
              />
          </Grid>
          <Grid item xs={12} sm={8} className={classes.searchBarOption}>
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
          <Button variant="contained" size="small" color="secondary" onClick={triggerOptions}>
            {
              showOptions ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>
            }
          </Button>
      </Grid>
    </Grid>
  );
}

export default SearchBar;