import React from "react";
import CartWidget from "./CartWidget";

export default function NavBar (){
    return(
    <>
    <div className="navBar">
        <div className="navBar">
        <img src="#" alt="BRAND" />
        <ul>
            <li> <a href="#">quienes somos </a> </li>
            <li> <a href="#">productos </a> 
                <ul>
                <li><a href="#">producto 1</a></li> 
                <li><a href="#">producto 2</a></li>
                <li><a href="#">producto 3</a>
                    <ul>
                    <li><a href="#">subproducto 1</a></li> 
                    <li><a href="#">subproducto 2</a></li>
                    <li><a href="#">subproducto 3</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            <li> <a href="#">contacto </a> </li>
        </ul> 
        <div>
          <CartWidget />
        </div>
        </div>
    </div>
    

    </>
   )
  }