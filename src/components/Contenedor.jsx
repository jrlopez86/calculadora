import { evaluate } from 'mathjs'
import React, { useState } from 'react'
import Boton from './Boton'
import BotonClear from './BotonClear'
import Pantalla from './Pantalla'

const Contenedor = () => {

  const [input, setInput] = useState('');

  const agregarInput = (val) => {
    if (['+', '-', '*', '/'].includes(val)) {
      // Si el último carácter es un operador, reemplazarlo por el nuevo operador
      if (['+', '-', '*', '/'].includes(input.slice(-1))) {
        setInput(input.slice(0, -1) + val);
      } else {
        setInput(input + val);
      }
    } else {
      setInput(input + val);
    }
  };

  const calcularResultado = () => {
    input ? setInput(String(evaluate(input))) : alert('Ingrese un valor');
  };

  return (
    <div className='contenedor'>
      <Pantalla display={input} />
      <div className='contenedor__fila'>
        <Boton manejarClic={agregarInput}>1</Boton>
        <Boton manejarClic={agregarInput}>2</Boton>
        <Boton manejarClic={agregarInput}>3</Boton>
        <Boton manejarClic={() => agregarInput('+')}>+</Boton>
      </div>
      <div className='contenedor__fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={() => agregarInput('-')}>-</Boton>
      </div>
      <div className='contenedor__fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={() => agregarInput('*')}>*</Boton>
      </div>
      <div className='contenedor__fila'>
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={() => agregarInput('/')}>/</Boton>
      </div>
      <div className='contenedor__fila'>
        <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
      </div>
    </div>
  );
};


export default Contenedor