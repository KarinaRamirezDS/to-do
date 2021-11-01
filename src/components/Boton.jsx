import React from "react";


const Boton = ({setPalabra, accion}) => {
    return (
    
        <div className="">
             <button className="boton" onClick={() => setPalabra(accion)}>{accion}</button>
        </div>
    
    )
}

export default Boton
