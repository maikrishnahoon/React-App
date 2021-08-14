import React,{useEffect,useState} from 'react'
// use effect variation - 1
// no optional dependency array is passed
// it runs after every render

function Ue1() {
// run only first time and set state (count) = 0;
   const [count,setCount] = useState(0);
    // won't run first time until Ue1 render first time.
     useEffect(()=>{
         console.log('useEffect');
         document.title =   `Clicked ${count} times`
     })
     console.log('render');
     
    return (
        <div>
            <p>Youu Cliked button {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}

export default Ue1
