import React, { useState } from "react";

const Counter=()=>{
  const[counter, setCounter]=useState(0);
  const onClick = () =>{
    //setCounter(counter+1);
    setCounter((current) => current + 1)
  }

  return(
    <div>
      <h3>Total click : {counter}</h3>
      <button onClick={onClick}>click</button>
    </div>
  )

}

export default Counter;