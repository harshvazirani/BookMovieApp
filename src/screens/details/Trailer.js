import React from 'react';
import YouTube from 'react-youtube';
import './Details.css';

function onReady(e) {
    e.target.pauseVideo();
  }

const Trailer = function(props) {

    const opts = {
      height: '507',
      width: '900',
      playerVars: {
        autoplay: 1,
      },
    };
    return <YouTube videoId={props.id} opts={opts} onReady={onReady} className="video"/>;
  }

  export default Trailer;


