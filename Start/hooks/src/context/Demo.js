import React,{useContext} from 'react'
import MyContext from './Context';
import Demochild from './Demochild';
function Demo() {
    console.log('Demo Render');
    const val = useContext(MyContext);
    console.log(val);
    return (
        <div>
            <Demochild/>
        </div>
    )
}

export default  React.memo(Demo)