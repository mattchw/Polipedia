import React from 'react';
import Header from '../components/Header/Header'

import Intro from '../components/Intro/Intro'

function Home(props) {

  return (
    <div>
      <Header content={props.content.header}/>
      <Intro content={props.content.intro}/>
    </div>
  );
}

export default Home;