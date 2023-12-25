import React, { useEffect, useState } from 'react';

const Effect = () => {
  const [keyword,setKeyword] = useState("");
  const onChange=(event)=>{
    setKeyword(event.target.value);
  }
  console.log("상시 실행");
  useEffect(()=>{
    console.log("한번만 실행");
  },[])
  useEffect(()=>{
    console.log("'keyword'가 변경될 때만 실행");
  },[keyword])
  return (
    <div>
      <input 
      value={keyword}
      onChange={onChange}
      type="text" />
    </div>
  );
};

export default Effect;