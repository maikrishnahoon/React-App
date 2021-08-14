import React,{useState} from 'react'
import Demo from './Demo';
import MyContext from './Context';
function Main() {
    console.log('Render');
    const[count,setCount] =useState(0);
    return (
        <div>
            {/* provider me wrap krne se mycontext ki value changed to state value */}
             <button onClick={()=>{setCount(count+1)}} >Click</button>  {/* value = state*/}
           <MyContext.Provider value={count}>       {/*  basically ab jab bhi state ki value change hogi Mycontext ki value change hogi to uske child ki value bhi change hogi*/}
                <Demo/>
            </MyContext.Provider>
        </div>
    )
}

export default Main
// Demo render value print 0
//Demo child render value print 0
//click pe all comps re render.