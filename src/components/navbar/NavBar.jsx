import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import style from "./NavBar.module.css"
import { scrollNavBarArchivos, scrollNavBarPublicaciones,scrollNavBarConocenos } from '../../actions'

const NavBar = () => {
  const dispatch = useDispatch()

  const btnPublicaciones = () =>{
    dispatch(scrollNavBarPublicaciones(true));
  }
  const btnArchivos = () =>{
        dispatch(scrollNavBarArchivos(true));
    }
  const btnConocenos = () =>{
      dispatch(scrollNavBarConocenos(true));
    }    
  const btnAdex = () =>{
      window.location.href = 'http://www.adexperu.edu.pe/'
    }   

  return (
    <div id='navContainer' className={style.container}>
      <div className={style.divContainer} onClick={btnPublicaciones} >
      <h1>Publicacionesss</h1> 
      </div>
      <div className={style.divContainer} onClick={btnArchivos}>
      <h1>Archivos</h1>  {/*(IMAGENES)*/} 
      </div>
      <div className={style.divContainer} onClick={btnConocenos} >
      <h1>Conócenos</h1> {/*(INFORMACIÓN DE NOSOTROS)*/} 
      </div>
      <div className={style.divContainerA} onClick={btnAdex}>
      <h1>ADEX</h1>
      </div>
  </div>
  )
}

export default NavBar