import React, { useState } from 'react'

const BotonClear = ( props ) => {


 


  return (
  <button className='boton-clear' onClick={props.manejarClear} >
    {props.children}
  </button>
  )
}

export default BotonClear