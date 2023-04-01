import React from 'react'
import '../styles/styles.css'

const Boton = (props) => {

    const esOperador = (valor) => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }


  return (
   <button className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}
   onClick={() => props.manejarClic(props.children)}>
     {props.children}
   </button>
  )
}

export default Boton