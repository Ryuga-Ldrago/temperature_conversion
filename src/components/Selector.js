import {useState} from 'react';
import Output from './Output';

const Selector = (props) =>{
    const [from , setFrom] = useState('Celsius')
    const [to , setTo] = useState('Fahrenheit')
    const data = props.inputdata
    const [result ,setResult] = useState(0)
     
   
    const handler_from_to =(e) =>{
        if (e.target.id === 'from')
        {setFrom(e.target.value)

        }          
        else if (e.target.id === 'to')
        {setTo(e.target.value)
          
        }      
        output_getter();   
    }

    const output_getter = () =>{
      // console.log('Button Clicked output_getter')

      // ---- conditions Logics -----

      if (from === 'Celsius' && to === 'Fahrenheit')
      {
        const r  = data * 9/5 + 32
        setResult(r)
      }
      else if (from === 'Celsius' && to === 'Kelvin')
      {
        const r  = data + 273.15
        setResult(r)
      }
      else if (from === 'Fahrenheit' && to === 'Celsius')
      {
        const r  = (data - 32) * (5/9)
        setResult(r)
      }
      else if (from === 'Fahrenheit' && to === 'Kelvin')
      {
        const r  = (data + 459.67) * 5/9
        
        setResult(r.toFixed(3))
      }
      else if (from === 'Kelvin' && to === 'Fahrenheit')
      {
        const r  =  data * (9/5) - 459.67
        setResult(r)
      }
      else if (from === 'Kelvin' && to === 'Celsius')
      {
        const r  = data - 273.15
        setResult(r)
      }
      else {
        alert('Invalid Match')
      }

    }



    // console.log('data : ',data)
    // console.log('Result  : ',result)
      
    

    return <>
           <div className='temp-selector'>
              <div className='from-select'>
                
                <select id='from' value={from} onChange={handler_from_to}>
                  <option value='Celsius'>Celsius</option>
                  <option value='Fahrenheit'>Fahrenheit</option>
                  <option value='Kelvin'>Kelvin</option>
                </select>
              </div>
              <h3>To</h3>
              <div className='to-select'>
              
                <select id='to' value={to}  onChange={handler_from_to}>
                  <option value='Fahrenheit'>Fahrenheit</option>
                  <option value='Celsius'>Celsius</option>
                  <option value='Kelvin'>Kelvin</option>
                </select>
              </div>
          </div>

          <div className='temp-btn'>
            <button type='button' onClick={output_getter}>Calculate</button>
          </div>

          <Output fromdata={from} todata={to} result={result} />
           </>  
}

export default Selector;