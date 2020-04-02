import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { dataActions } from '../actions/fetchDataAction';
import { getData, getCurrentPage, getKeyword, getFilters } from '../reducers/dataReducer';

import Container from '@material-ui/core/Container';
import Content from '../components/Content/Content.container'
import SearchBar from '../components/SearchBar/SearchBar'
import DrawerHeader from '../components/DrawerHeader/DrawerHeader'
import CircularProgress from '@material-ui/core/CircularProgress';

const queryString = require('query-string');

function Explore({location}) {
  const category = queryString.parse(location.search).category;
  const data = useSelector(getData);
  const page = useSelector(getCurrentPage);
  const keyword = useSelector(getKeyword);
  const filters = useSelector(getFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataActions.clearKeywordAndFilters());
    dispatch(dataActions.getAll(category));
  }, [category]);

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <DrawerHeader/>
        <SearchBar category={category} page={page} keyword={keyword} filters={filters}/>
        {
          data.isFetching ? <CircularProgress size={50} style={{margin: 50}}/> : <Content category={category} data={data} page={page} keyword={keyword} filters={filters}/>
        }
    </Container> 
  );
}

export default Explore;