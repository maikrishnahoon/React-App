import React,{useState,useEffect} from 'react'

function Infinity() {
  const[count,countState] = useState(0);
    useEffect(() => {
        console.log('useEffect');
        let val = Math.random()*100;
         countState(val);
    },[])  // use empty array whenever state is changing or state is changing thorugh APi
    return (
        <div>
          <h1 onClick={()=>{countState(count+1)}}>{count}</h1>  
        </div>
    )
}

export default Infinity
