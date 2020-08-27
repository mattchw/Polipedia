import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { dataActions } from '../actions/fetchDataAction';
import { getData, getCurrentPage, getKeyword, getFilters } from '../reducers/dataReducer';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Content from '../components/Content/Content.container'
import SearchBar from '../components/SearchBar/SearchBar'
import DrawerHeader from '../components/DrawerHeader/DrawerHeader'
import CircularProgress from '@material-ui/core/CircularProgress';
import Footer from '../components/Footer/Footer';

const queryString = require('query-string');
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

function Explore({content, location}) {
  const category = queryString.parse(location.search).category;
  const data = useSelector(getData);
  const page = useSelector(getCurrentPage);
  const keyword = useSelector(getKeyword);
  const filters = useSelector(getFilters);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(dataActions.clearKeywordAndFilters());
    dispatch(dataActions.getAll(category));
  }, [category, dispatch]);

  return (
    <div className={classes.root}>
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <DrawerHeader/>
        <SearchBar content={content} category={category} page={page} keyword={keyword} filters={filters}/>
        {
          data.isFetching ? <CircularProgress size={50} style={{margin: 50}}/> : <Content content={content} category={category} data={data} page={page} keyword={keyword} filters={filters}/>
        }
    </Container> 
    <Footer/>
    </div>
  );
}

export default Explore;