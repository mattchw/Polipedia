import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ContentItem from './Content.component'

import Pagination from '@material-ui/lab/Pagination';

import { dataActions } from '../../actions/fetchDataAction';
import { getCurrentPage, getKeyword, getFilters } from '../../reducers/dataReducer';

function Content(props) {
  const page = useSelector(getCurrentPage);
  const keyword = useSelector(getKeyword);
  const filters = useSelector(getFilters);
  //const [page,setPage] = useState(useSelector(getCurrentPage));
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    //setPage(value);
    console.log("current page: "+page);
    dispatch(dataActions.updatePage(value));
    dispatch(dataActions.getWithOptions(keyword, filters, value));
  };

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item container direction="row" xs={11}>
          <Typography variant="overline">
            搜尋結果： {props.data.totalElements} ({props.data.totalPages})
          </Typography>
        </Grid>
      </Grid>
      {props.data.content.map((item, index) => (
        <ContentItem key={index} item={item}/>
      ))}
      <Grid container direction="row" justify="center" alignItems="center" style={{padding: '30px 0'}}>
        <Pagination
          size="small"
          shape="rounded"
          page={page}
          onChange={handleChange}
          count={props.data.totalPages}
        />
      </Grid>

    </div>
  );
}

export default Content;