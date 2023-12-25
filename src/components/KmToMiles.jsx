import React, { useState } from 'react';

const KmToMiles = () => {
  const [distance,setDistance]= useState(0);
  const [swaped,setSwaped] = useState(false);

  const onChange=(event)=>{
    setDistance(event.target.value);
  }

  const reset=()=>setDistance(0);
  const swap=()=>{
    setDistance(0)
    setSwaped((current)=>!current)
  }
  return (
    <div>
      <div>
      <h1>Km to Miles</h1>
      <label htmlFor="Km">Km</label>
      <input value={swaped?distance*1.609:distance} id="Km" placeholder='Km' type="number" onChange={onChange} disabled={swaped}/>
      </div>

      <div>
      <label htmlFor="Miles">Miles</label>
      <input value={swaped?distance:distance/1.609} id="Miles" placeholder='Miles' type="number" onChange={onChange} disabled={!swaped}/>
      </div>

      <button onClick={reset}>Reset</button>
      <button onClick={swap}>Swap</button>
    </div>
  );
};

export default KmToMiles;