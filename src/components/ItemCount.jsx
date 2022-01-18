
import React, { useState } from 'react';
import './ItemCount.css';
import ItemList from './ItemList';


export default function ItemCount({stock, initial}){
const [count, setCount] = useState(0);
const [countinitial, setCountI] = useState (1)

function sumar (){
    if(count < stock ) setCount(count+1)
}
function restar (){
   if (count > countinitial ) setCount(count-1) ;
    
}
function agregueCarrito(){
    alert('agregaste'+ ({count})  +'productos');
}


return (
    <>
    <div className='general'>
        <div>
            <p>Item</p>
        <button className='botones' onClick={(restar)}> - </button>
        <span>{count}</span>
        <button className='botones' onClick={(sumar)}> + </button>
        </div>
        <button className='botonagregar' onClick={()=>agregueCarrito()}> Agregar al carrito </button>
    </div>
    </>
);
}



