import react, {useState} from "react";
import Producto from "./Producto";


export default function ItemList(){


const [arrayDeItems, setarrayDeItems] = useState ([
                {nombre : 'salvado' , stock : 3} , 
                // {nombre : 'centeno' , stock : 8} , 
                // {nombre : 'trigo' , stock : 4} 
            ]);

    return (
        <>
        {
            arrayDeItems.map(item =>{
            return <Producto item = {item}/>
            })
        }
        </>
    )
}