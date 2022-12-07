import {Consumer}  from '../Context';

const Output = (props) =>{
    //  console.log(props.result)
    return <>
             <div className='output-container'>
                
                <Consumer>
                    {data => <h1> {data === '' ? '0' : data} {props.fromdata} = {props.result} {props.todata}</h1>}

                     {/*  ------ or ----- */}

                    {/* {data => {
                        if(data === '')
                        return <h1>  0 Celsius = 33 Fahrenheit</h1>
                        else
                        return <h1>  {data} Celsius = 33 Fahrenheit</h1>
                    }} */}
                </Consumer>
            </div>
           </>  
}

export default Output;