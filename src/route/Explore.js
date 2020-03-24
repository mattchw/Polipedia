import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { dataActions } from '../actions/fetchDataAction';
import { getData } from '../reducers/dataReducer';

import Container from '@material-ui/core/Container';
import Content from '../components/Content/Content.container'
import SearchBar from '../components/SearchBar/SearchBar'
import CircularProgress from '@material-ui/core/CircularProgress';

const queryString = require('query-string');

function parseQuery(location){
  console.log(queryString.parse(location.search).category);
  switch(queryString.parse(location.search).category){
    default:
      return dataActions.getAll();
  }
}

function Explore({location}) {
  const data = useSelector(getData);
  const dispatch = useDispatch();

  useEffect(() => {
    // getQuery(location);
    dispatch(parseQuery(location));
  }, []);

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
        <SearchBar/>
        {
          data.isFetching ? <CircularProgress size={50} style={{margin: 50}}/> : <Content data={data}/>
        }
    </Container> 
  );
}

export default Explore;