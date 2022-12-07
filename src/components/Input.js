import {useState} from 'react';
import Selector from './Selector';
import {Provider}  from '../Context';

const Input = () =>{
    const [inputdata ,setInputdata] = useState('')
     
    const handle_input_num =(e)=>{
                     
                    if (e.target.value.length < 4)
                        setInputdata(e.target.value)
                    else
                        alert('Value must be less than 1000 that you enter here')
                }

    return <>
           <div className='enter-temp'>
            <input type='number' value={inputdata} onChange={handle_input_num} placeholder='Enter Number...' />
          </div>

          <Provider value = {inputdata}>
                <Selector inputdata={Number.parseInt(inputdata)} />          
          </Provider>
           </>  
}

export default Input;