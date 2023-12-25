import React, { useState } from 'react';

const HourToMinutes = () => {
  const [time,setTime]= useState(0);
  const [swaped,setSwaped] = useState(false);

  const onChange=(event)=>{
    setTime(event.target.value);
  }

  const reset=()=>setTime(0);
  const swap=()=>{
    setTime(0)
    setSwaped((current)=>!current)
  }
  return (
    <div>
      <div>
      <h1>Minutes to Hours</h1>
      <label htmlFor="min">Minutes</label>
      <input value={swaped?time*60:time} id="min" placeholder='Minutes' type="number" onChange={onChange} disabled={swaped}/>
      </div>

      <div>
      <label htmlFor="hours">Hours</label>
      <input value={swaped?time:Math.round(time/60)} id="hours" placeholder='Hours' type="number" onChange={onChange} disabled={!swaped}/>
      </div>

      <button onClick={reset}>Reset</button>
      <button onClick={swap}>Swap</button>
    </div>
  );
};

export default HourToMinutes;