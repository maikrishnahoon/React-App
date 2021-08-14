import React,{useState,useEffect} from 'react'
import './Ue3.css';

// 3rd variation
//non empty depencny array passed
// depencny array ke andar state pass karte hai
// to renderd cause(state change) ki wjha se hi change hota 

function Ue3() {
    console.log('render');
    const[count,setCount] = useState(0);
    const[darkMode,setDarkMode] = useState(false);
        useEffect(() => {
         console.log('useEffect');
         document.title=`Clicked ${count} times`
            
        },[count])
    return (
        <div className={darkMode ? "view dark-mode":"view"} >
            <label htmlFor='dark Mode'>DarkMode</label>
            <input type ='checkbox' checked={darkMode} onChange={()=>setDarkMode(!darkMode)}/>
            <button onClick={()=>{setCount(count+1)}}>{count}</button>
            
        </div>
    )
}

export default Ue3
