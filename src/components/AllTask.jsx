import React from "react";
//import Todo from "../components/Todo";
//import Loader from "../components/Loader";
const AllTask = ({ setPalabra}) => {

    return(
        <div>
              <button className="boton" onClick={() => setPalabra("todo")}>AllTask</button>
        </div>
    )
       
};

export default AllTask;