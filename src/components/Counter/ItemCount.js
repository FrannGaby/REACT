import './Counter.css';
import React, { useState } from 'react'



function ItemCount({onAdd, stock, initial, count }) {

    return <div>
        <button className="btn-remover" onClick={() =>{if(count >initial) {onAdd(' - ')}}}> Remover </button>
        

        {count}
        <button className="btn" onClick={() => { if(count < stock){onAdd(' + ')}}}> Agregar al carrito </button>


    </div>;

}
export default ItemCount;