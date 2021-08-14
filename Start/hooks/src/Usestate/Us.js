import React,{useState} from 'react'

function Us() {
  // Syntax.............................                 we are making objects as state here 
    // const [state-name,state-change-method] = useState({ojb1-key: ojb1-value,ojb2-key: ojb2-value});
    const [msgObj,setMessage] = useState({message:'',id:1});
    // any type of function
    const handleChange =(e)=>{
        let val = e.target.value;
        // msgObj.message = val;
        // console.log(msgObj);
        // setMessage({...msgObj,message:val});
        // by using spread opertor, msgobj is creating at new memory location without using spread opertor state was changing but not rendering on screen
        // bcs msgObj's lacotion was not changing
        let obj  = {...msgObj,message:val};
        setMessage(obj)
        
    }
    return (
        <div>
            <input type='text' value={msgObj.message} onChange= {handleChange}></input>
            <p>{msgObj.message}</p>
        </div>
    )
}
export default Us