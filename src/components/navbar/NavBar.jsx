import React from 'react'

import {  useDispatch } from 'react-redux';

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
      <div className={style.divContainer}  >
      <h1 onClick={btnPublicaciones}  >Publicaciones</h1> 
      </div>
      <div className={style.divContainer} >
      <h1 onClick={btnArchivos}>Archivos</h1>  {/*(IMAGENES)*/} 
      </div>
      <div className={style.divContainer} >
      <h1 onClick={btnConocenos}>Integrantes</h1> {/*(INFORMACIÓN DE NOSOTROS)*/} 
      </div>
      <div className={style.divContainerA} >
      {/* <h1>ADEX</h1> */}
      <img src='https://scontent.flim12-1.fna.fbcdn.net/v/t1.18169-9/13903407_1033985716637694_9089162073519752579_n.png?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGQEdG0kgdE0bxvMbDnuxbpwdE2OeyuCLLB0TY57K4IsuDmFm0FtEJ0J5DNEB_nsuft9Ty2hITzAk35uf-R7f4D&_nc_ohc=QywPVMzfVS4AX_nhtp_&_nc_ht=scontent.flim12-1.fna&oh=00_AfAOBjjrEJQBFvZ41_tA5VJ_Haf9tSNwNM1SK-mpgHD1Kg&oe=64E57EC3' onClick={btnAdex}>
      </img>
      </div>
  </div>
  )
}

export default NavBar