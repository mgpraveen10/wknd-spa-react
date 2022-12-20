import React from "react";

import Countdown from "react-countdown";



// Random component

const Completionist = () => "";




// Renderer callback with condition

const renderer = ({ days, hours, minutes, seconds, completed }) => {

  if (completed) {

    // Render a completed state

   

    return <Completionist />;

  } else {

    // Render a countdown

    return (

      <span>

        {days>0? days+"d:":""}{hours}h:{minutes}m:{seconds}s

      </span>

    );

  }

};



const Timer = (props) => {

  return (

    <Countdown date={Date.now() + props.timeTillOffer} renderer={renderer} />

    // <Countdown date={Date.now() + 10000} renderer={renderer} />

  );

};



export default Timer;