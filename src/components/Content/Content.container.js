import React from 'react';

import { useDispatch } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ContentItem from './Content.component'

import Pagination from '@material-ui/lab/Pagination';

import { dataActions } from '../../actions/fetchDataAction';

function Content(props) {
  const page = props.page;
  // const [content, setContent] = useState([]);
  const keyword = props.keyword;
  const filters = props.filters;
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    dispatch(dataActions.updatePage(value));
    dispatch(dataActions.getWithOptions(props.category, keyword, filters, value));
  };

  // useEffect(()=>{
  //   let tmp = []
  //   switch(props.category){
  //     case("persons"):
  //       for(let i = 0; i<props.data.content.length;i++){
  //         let item = props.data.content[i];
  //         let obj = {
  //           id: item[0],
  //           name: item[1],
  //           stance: item[2],
  //           description: item[3],
  //           profile: item[4],
  //           occupation: item[5]
  //         }
  //         tmp.push(obj);
  //       }
  //       setContent(tmp);
  //       break;
  //     case("youtubes"):
  //       for(let i = 0; i<props.data.content.length;i++){
  //         let item = props.data.content[i];
  //         let obj = {
  //           id: item[0],
  //           name: item[1],
  //           stance: item[2],
  //           subscribe: item[3],
  //           description: item[4],
  //           profile: item[5],
  //           category: item[6]
  //         }
  //         tmp.push(obj);
  //       }
  //       setContent(tmp);
  //       break;
  //     default:
  //       break;
  //   }
  // }, [props.category, props.data]);

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item container direction="row" xs={11}>
          <Typography variant="overline">
            搜尋結果： {props.data.totalElements} (共{props.data.totalPages}頁)
          </Typography>
        </Grid>
      </Grid>
      {props.data && props.data.content.map((item, index) => (
        <ContentItem key={index} category={props.category} item={item}/>
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