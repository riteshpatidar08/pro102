import React, { useEffect } from 'react';

function Mens() {
    useEffect(()=>{
        document.title = "Mens"
    },[])
    
  return <div>mens</div>;
}

export default Mens;
