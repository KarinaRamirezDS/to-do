import React from "react";

//Estilos
import "../styles/Header.css";
import Botoncompleto from "./Botoncompleto";
import BotonInComplete from "./BotonIncomplete";
import AllTask from "./AllTask";
import Boton from "./Boton";
const Header = ({setPalabra}) => {
  return (
    <>
    <header>
      
      <h4 className="logo">TO-DO </h4>
      <Boton setPalabra={setPalabra} accion = "todo"/>
      <Boton setPalabra={setPalabra} accion = "incompleted"/>
      <Boton setPalabra={setPalabra} accion = "completed"/>
     
    </header>
   
    </>
    
  );
};

export default Header;
