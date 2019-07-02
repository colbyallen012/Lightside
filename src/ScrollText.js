import React, { Component } from 'react';
import './ScrollText.css';

const ScrollText = ({ movieInfo }) => {
  return (
    <aside>
      <marquee 
        behavior="scroll" 
        direction="up" 
        // style="height: 800px;"
        scrollamount="1"
      >
      { movieInfo.opening_crawl }
      </marquee>
      <h2>{ movieInfo.title }, { movieInfo.release_date }</h2>
    </aside>
  )
}

export default ScrollText;