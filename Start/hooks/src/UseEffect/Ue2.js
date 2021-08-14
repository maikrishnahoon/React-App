import React,{useEffect,useState} from 'react'
// variation-2
// there is presence of dependency array
// empty dependcy array
function Ue2() {
    const[count,setCount] = useState(0);
    // Use-effect runs only one time after first render
    useEffect(() => {
        console.log('useEffect');
        document.title =  `Clicked ${count} times`;
    },[])
    console.log('render');
    return (
        <div>
           <p>You Clicked the button {count} times</p> 
           <button onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}

export default Ue2
