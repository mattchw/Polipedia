import React from 'react';
import Header from '../components/Header/Header'
import Intro from '../components/Intro/Intro'
import Example from '../components/Example/Example'

function Home(props) {

  return (
    <div>
      <Header content={props.content.header}/>
      <Intro content={props.content.intro}/>
      <Example content={props.content.example} filters={props.filters}/>
    </div>
  );
}

export default Home;