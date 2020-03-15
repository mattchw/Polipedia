import React from 'react';

import Grid from '@material-ui/core/Grid';
import ContentItem from './Content.component'

function Content(props) {

  return (
    <div>   
      {props.data.map((item, index) => (
        <ContentItem key={index} item={item}/>
      ))}
      {props.children}
    </div>
  );
}

export default Content;