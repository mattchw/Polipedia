import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Content from '../components/Content/Content.container'
import SearchBar from '../components/SearchBar/SearchBar'
import Grid from '@material-ui/core/Grid';

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
  const [data, setData] = useState(dummyPerson);
  const classes = useStyles();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       '/api/v1/person',
  //     );
  //     setData(result.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <Container maxWidth='xl'>
        <SearchBar/>
        <Content data={data}/>
    </Container> 
  );
}

export default Explore;