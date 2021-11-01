import React from "react";

const Botoncompleto = ({setPalabra}) => {
    return (
        
        <div>
        <button className="boton" onClick={() => setPalabra("completed")}>completed</button>
        </div>
    )
};

export default Botoncompleto;