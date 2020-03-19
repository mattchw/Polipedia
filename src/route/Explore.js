import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Content from '../components/Content/Content.container'
import SearchBar from '../components/SearchBar/SearchBar'
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import dummyPerson from '../utils/dummy/person'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: 500,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function Explore() {
  const [data, setData] = useState({
    content: [],
    total: 0,
    isFetching: false
  });
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData({content: data.content, total: 0, isFetching: true});
        const result = await axios(
          '/api/v1/persons',
        );
        setData({content: result.data.content, total: result.data.totalElements, isFetching: false});
        // console.log(result);
      } catch (e) {
        console.log(e);
        setData({content: data.content, total: 0, isFetching: false});
      }
    };
    fetchData();
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