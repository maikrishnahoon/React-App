import React,{useContext} from 'react'
import MyContext from './Context';
function Demochild() {
    console.log('Demo child Render');
    const val = useContext(MyContext);
    console.log(val);
    return (
        <div>

        </div>
    )
}

export default Demochild