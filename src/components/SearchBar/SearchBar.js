import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { dataActions } from '../../actions/fetchDataAction';
import { getFetchingStatus } from '../../reducers/dataReducer';

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


function getFilters(){
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
  const [keyword, setKeyword] = useState("");
  const [filters, setFilters] = useState({
    stances: [],
    options: [],
  });
  const [showFilters, setShowFilters] = useState({
    display: 'none',
    opacity: 0,
  });

  const dispatch = useDispatch();

  const handleChangeKeyword = event => {
    setKeyword(event.target.value);
  };

  const handleChangeOptions = selected => {
    setFilters(prevState=>{
      return { ...prevState, options: selected }
    });
  };

  const handleChangeStances = selected => {
    setFilters(prevState=>{
      return { ...prevState, stances: selected }
    });
  };

  const toggleFilters = () => {
    if (showFilters.display === 'none') {
      setShowFilters(prevState=>{
        return {...prevState, display: 'flex'}
      });
      setTimeout(() =>
        setShowFilters(prevState=>{
          return {...prevState, opacity: 1}
        }), 100
      )
    }
    if (showFilters.display === 'flex') {
      setShowFilters(prevState=>{
        return {...prevState, opacity: 0}
      });
      setTimeout(() =>
        setShowFilters(prevState=>{
          return {...prevState, display: 'none'}
        }), 300 
      )
    }
  }

  const handleSearch = () => {
    dispatch(dataActions.getWithOptions(keyword, filters));
  };

  useEffect(() => {
    if(stances.length==0&&options.length==0){
      getFilters();
    } else {
      dispatch(dataActions.getWithOptions(keyword, filters));
    }
  }, [filters]);

  return (
    <Grid container direction="row" justify="center" alignItems="center" className={classes.searchBarContainer}>
      <Grid item xs={10}>
        <Paper className={classes.root}>
            <InputBase
            className={classes.input}
            placeholder="Search"
            value={keyword}
            onChange={handleChangeKeyword}
            />
            <Divider orientation="vertical" flexItem />
            <IconButton
              type="submit" 
              className={classes.iconButton} 
              aria-label="search" 
              onClick={handleSearch}
              disabled={(useSelector(getFetchingStatus))||(!keyword)}
            >
                <SearchIcon />
            </IconButton>
        </Paper>
      </Grid>
      {
        <Grid container item xs={10} direction="row" justify="center" alignItems="flex-start" className={classes.searchBarOptionContainer} 
          style={{
            transition: 'opacity 0.3s ease',
            opacity: showFilters.opacity,
            display: showFilters.display,
          }}
        >
          <Grid item xs={12} md={4} className={classes.searchBarOption}>
            <Select
              isMulti
              isDisabled={useSelector(getFetchingStatus)}
              isSearchable={false}
              closeMenuOnSelect={false}
              value={filters.stances}
              onChange={handleChangeStances}
              options={stances}
              placeholder="立場"
            />
          </Grid>
          <Grid item xs={12} md={8} className={classes.searchBarOption}>
            <Select
              isMulti
              isDisabled={useSelector(getFetchingStatus)}
              isSearchable={false}
              closeMenuOnSelect={false}
              value={filters.moreOptions}
              onChange={handleChangeOptions}
              options={options}
              placeholder="Options"
            />
          </Grid>  
      </Grid>
      }
      
      <Grid container direction="row" justify="center" alignItems="flex-start" className={classes.searchBarOptionButton}>
          <Button variant="contained" size="small" color="secondary" onClick={toggleFilters}>
            {
              (showFilters.display==='flex') ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>
            }
          </Button>
      </Grid>
    </Grid>
  );
}

export default SearchBar;