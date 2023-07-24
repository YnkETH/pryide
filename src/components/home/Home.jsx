import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import NavBar from '../navbar/NavBar'
import Publicaciones from '../publicaciones/Publicaciones'
import Archivo from '../archivos/Archivo'
import Integrantes from '../integrantes/Integrante'
import { scrollNavBarArchivos, scrollNavBarConocenos, scrollNavBarPublicaciones } from '../../actions'
import style from './Home.module.css'


const Home = () => {

  const navbarRefArc = useRef(null);
  const navbarRefPubs = useRef(null)
  const navbarRefCon = useRef(null)
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    const isModalShown = localStorage.getItem('isModalShown');

    if (!isModalShown) {
      setIsOpen(true);
      localStorage.setItem('isModalShown', true);
    }
  }, [])

    //////////////////////     
    const [texto, setTexto] = useState('B'); 
    const [showExclamation, setShowExclamation] = useState(true);
    const textoOriginal = "Bienvenido";
    
    
  // Función para animar el texto como si se estuviera escribiendo
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < textoOriginal.length-1) {
        setTexto((prevTexto) => prevTexto + textoOriginal[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        // Mostrar "!." intermitentemente por 3 segundos
        setTimeout(() => {
          setShowExclamation(false);
        }, 500); // Ocultar "!." después de 1 segundo
        setTimeout(() => {
          setShowExclamation(true);
        }, 1200); // Mostrar "!." después de 2 segundo
        setTimeout(() => {
          setShowExclamation(false);
        }, 1700); // Mostrar "!." después de 2 segundos
        setTimeout(() => {
          setShowExclamation(true);
        }, 2200); // Mostrar "!." después de 2 segundos
        setTimeout(() => {
          setShowExclamation(false);
        }, 2700); // Mostrar "!." después de 2 segundos
        setTimeout(() => {
          setShowExclamation(true);
        }, 3200); // Mostrar "!." después de 2 segundos
      }
    }, 200); // Ajusta la velocidad de escritura aquí (en milisegundos)

    return () => {
      clearInterval(interval);
    };
  }, []);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 5000);
  
      return () => {
        clearTimeout(timer);
      };
    }, []);
 
    ///////////

  return (
    <div>
      {isOpen && (
        <div className={style.modalOverlay}>
          <div className={style.modal}>
            <h1>{texto}{showExclamation && texto.length==10? "!":''}</h1>
          </div>
        </div>
      )}  
      <NavBar/>      
      <div ref={navbarRefPubs}>
      <Publicaciones/>
      </div>
      <div ref={navbarRefArc}>
      <Archivo />
      </div>
      <div ref={navbarRefCon}>
      <Integrantes/> 
      </div>     
      <div>
        <button className={style.homeBtn} onClick={scrollToTop}></button>
      </div>
  </div>
  )
}

export default Home