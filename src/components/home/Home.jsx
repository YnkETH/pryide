import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import NavBar from '../navbar/NavBar'
import Publicaciones from '../publicaciones/Publicaciones'
import Archivo from '../archivos/Archivo'
import Integrantes from '../integrantes/Integrante'
import { scrollNavBarArchivos, scrollNavBarConocenos, scrollNavBarPublicaciones } from '../../actions'
import style from './Home.module.css'
import ModalIntegrantes from '../integrantes/ModalIntegrantes'


const Home = () => {

  const navbarRefArc = useRef(null);
  const navbarRefPubs = useRef(null)
  const navbarRefCon = useRef(null)
  const [isOpen, setIsOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

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

   
    const [texto, setTexto] = useState('B'); 
    const [showExclamation, setShowExclamation] = useState(true);
    const textoOriginal = "Bienvenido";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < textoOriginal.length-1) {
        setTexto((prevTexto) => prevTexto + textoOriginal[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        
        setTimeout(() => {
          setShowExclamation(false);
        }, 500); 
        setTimeout(() => {
          setShowExclamation(true);
        }, 1200); 
        setTimeout(() => {
          setShowExclamation(false);
        }, 1700); 
        setTimeout(() => {
          setShowExclamation(true);
        }, 2200); 
        setTimeout(() => {
          setShowExclamation(false);
        }, 2700); 
        setTimeout(() => {
          setShowExclamation(true);
        }, 3200);       }
    }, 200); 

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
 
    
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  

  return (
    <div>
      {isOpen && (
        <div className={style.modalOverlay}>
          <div className={style.modal}>
            <h1>{texto}{showExclamation && texto.length===10? "!":''}</h1>
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
      <div className={style.Participante}>
      <div className={style.titulo}>
      <h2>¿Te gustaría ser parte de nosotros?</h2>
      </div>
      <button onClick={openModal} className={style.participanteButton}>Quiero ayudar!</button>
      <ModalIntegrantes isOpen={isModalOpen} onClose={closeModal}/>
    </div>
      </div>     
      <div>
        <button className={style.homeBtn} onClick={scrollToTop}></button>
      </div>
  </div>
  )
}

export default Home