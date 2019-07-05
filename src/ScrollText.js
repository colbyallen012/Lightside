import React from 'react';
import './ScrollText.css';

const ScrollText = ({ movieInfo }) => {
  return (
    <aside>
      <marquee className='crawl-container' 
        behavior="scroll" 
        direction="up" 
        scrollamount="2"
      >
      { movieInfo.opening_crawl }
      </marquee>
      <h2>{ movieInfo.title }, { movieInfo.release_date }</h2>
    </aside>
  )
}

export default ScrollText;