import React, { useState, useEffect, useCallback } from 'react';

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

const useStyles = style;

let stances = [];
let options = [];

function SearchBar(props) {
  const classes = useStyles();
  const page = props.page;
  const keyword = props.keyword;
  const filters = props.filters;
  const [showFilters, setShowFilters] = useState({
    display: 'none',
    opacity: 0,
  });

  const dispatch = useDispatch();

  const initFilters = useCallback((category)=> {
    stances = [];
    options = [];
    for(let i = 0; i<props.content.searchBar.filters.stance.length; i++){
      let obj = {
        value: props.content.searchBar.filters.stance[i].id, 
        label: props.content.searchBar.filters.stance[i].name
      }
      stances.push(obj);
    }
    let tmp = [];
    switch(category){
      case("persons"):
        tmp = props.content.searchBar.filters.occupation;
        break;
      case("youtubes"):
        tmp = props.content.searchBar.filters.category;
        break;
      default:
        tmp = props.content.searchBar.filters.occupation;
  
    }
    for(let j = 0; j<tmp.length; j++){
      let obj = {
        value: tmp[j].id, 
        label: tmp[j].name
      }
      options.push(obj);
    }
  }, [props])

  const handleChangeKeyword = event => {
    dispatch(dataActions.updateKeywordAndFilters(event.target.value, filters));
  };

  const handleChangeStances = selected => {
    filters.stances = selected;
    dispatch(dataActions.updateKeywordAndFilters(keyword, filters));
    dispatch(dataActions.updatePage(1));
    dispatch(dataActions.getWithOptions(props.category, keyword, filters, 1));
  };

  const handleChangeOptions = selected => {
    filters.options = selected;
    dispatch(dataActions.updateKeywordAndFilters(keyword, filters));
    dispatch(dataActions.updatePage(1));
    dispatch(dataActions.getWithOptions(props.category, keyword, filters, 1));
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
    dispatch(dataActions.getWithOptions(props.category, keyword, filters, page));
  };

  useEffect(() => {
    initFilters(props.category);
  }, [props, initFilters]);

  return (
    <Grid container direction="row" justify="center" alignItems="center" className={classes.searchBarContainer}>
      <Grid item xs={10}>
        <Paper className={classes.root}>
            <InputBase
            className={classes.input}
            placeholder={props.content.searchBar.search}
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
              placeholder={props.content.searchBar.stance}
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
              placeholder={props.content.searchBar.options}
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