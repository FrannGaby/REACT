import './Counter.css'
import { useState } from 'react'
const Counter = () => {
    //let count = 0
    console.log(useState())
    const myState = useState(0)
    const decrement = () => {
        //console.log ('decremento')
       myState[1](myState[0]-1)
    }
    const increment = () => {
        //console.log ('incremento')
        myState[1](myState[0]+1)
    }
    
    return (
        <div>
            <button className=" btn-remover " onClick={decrement}> Remover  </button>
            <p className='Contador'>{myState[0]}</p>
            <button className=" btn " onClick={increment}>Añadir al Carrito</button>
        </div>
    )



}
export default Counter