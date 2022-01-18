import react from "react";

import ItemCount from "./ItemCount";

export default function Producto({item}){

    function onAdd(){
        alert(item.nombre+' '+item.stock);
    }
    
// console.log(item);
    return (
        <>
        <br />
Productos:
<p> {item.nombre}</p>
<p> {item.stock}</p>
<ItemCount stock={item.stock}/>
{/* <div onClick={()=>onAdd()}> agregar al carrito </div> */}

        </>

    )
}