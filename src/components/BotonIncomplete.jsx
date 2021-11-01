import React from "react";

const BotonInCompleto = ({setPalabra }) => {
    return (
        <div className="">
             <button className="boton" onClick={() => setPalabra("incompleted")}>incompleted</button>
        </div>
        
    )
};

export default BotonInCompleto;