import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import NavBar from '../navbar/NavBar'
import Publicaciones from '../publicaciones/Publicaciones'
import Archivo from '../archivos/Archivo'
import Conocenos from '../conocenos/Conocenos'
import { scrollNavBarArchivos, scrollNavBarConocenos, scrollNavBarPublicaciones } from '../../actions'
import style from './Home.module.css'

const Home = () => {

  const navbarRefArc = useRef(null);
  const navbarRefPubs = useRef(null)
  const navbarRefCon = useRef(null)

  const scrollArchivos = useSelector(state => state.scrollArchivos);
  const scrollPublicaciones = useSelector(state => state.scrollPublicaciones);
  const scrollConocenos = useSelector(state => state.scrollConocenos);
  const dispatch = useDispatch();

  
  useEffect(() => {
    if (scrollPublicaciones) {
      const rect2 = navbarRefPubs.current.getBoundingClientRect(); 
      const offset = -1000;

      window.scroll({
        top: rect2.top + window.scrollY + offset,
        behavior: 'smooth',
      });

      dispatch(scrollNavBarPublicaciones(false));
    }
  }, [scrollPublicaciones, dispatch]);

  useEffect(() => {
    if (scrollArchivos) {
      const rect = navbarRefArc.current.getBoundingClientRect();
      const navbarRef = document.getElementById('navContainer'); 
      const offset = -navbarRef.clientHeight;

      window.scroll({
        top: rect.top + window.scrollY + offset,
        behavior: 'smooth',
      });

      dispatch(scrollNavBarArchivos(false));
    }
  }, [scrollArchivos, dispatch]);

  useEffect(() => {
    if (scrollConocenos) {
      const rect3 = navbarRefCon.current.getBoundingClientRect();
      const navbarRef = document.getElementById('navContainer'); 
      const offset = -navbarRef.clientHeight;

      window.scroll({
        top: rect3.top + window.scrollY + offset,
        behavior: 'smooth',
      });

      dispatch(scrollNavBarConocenos(false));
    }
  }, [scrollConocenos, dispatch]);

  function scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div>
      <NavBar/>  
      <div ref={navbarRefPubs}>
      <Publicaciones/>
      </div>
      <div ref={navbarRefArc}>
      <Archivo />
      </div>
      <div ref={navbarRefCon}>
      <Conocenos/>
      </div>
      <div >
        <button className={style.homeBtn} onClick={scrollToTop}></button>
      </div>
  </div>
  )
}

export default Home