import React,{useState,useEffect} from 'react'

function Uewc() {
   const[count,setCount] = useState(0);
   console.log('render');
   useEffect(() => {
      console.log("useEffect");
      document.title =`Clicked ${count} times`

      // cleanup
    //   before running useEffect it will return below function
      return ()=>{
          alert(`I wiil be called before the next useEffect is called ${count}`)
      }
   },[])
    return (
        <div>
        <p>{count}</p>
        <button onClic k={()=>{setCount(count+1)}}>Count</button>    
        </div>
    )
}

export default Uewc
