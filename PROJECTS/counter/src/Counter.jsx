import './counter.css'
import { useState } from 'react'

function Counter() {
        const [increse , setIncrese] = useState(0)

        const incc = () => {
            setIncrese(increse +1)
        } 
        const dec = () => {
            setIncrese(increse -1)
        } 




  return (
    <div className='main' >
      <h2 className='text'>COUNTER</h2>
      <h3> {increse} </h3>
        <button className='btn' onClick={incc} > INCREASE</button>
        <button className='dec_btn' onClick={dec} > DECREASE</button>
    </div>
  )
}

export default Counter
