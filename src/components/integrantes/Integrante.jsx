import React, { useEffect, useState } from 'react'
import style from './Integrantes.module.css'
import imgDeny from '../../imgs/deny.png'
import imgFat from '../../imgs/fat.png'

function Conocenos() {
  

  const btnLinkedinJulio = () =>{
    window.location.href = 'https://www.linkedin.com/in/juliomaravi/'
  }
  const btnLinkedinFatima = () =>{
    window.location.href = 'https://www.linkedin.com/in/fatima-mori-blanco-aa6732284/'
  }
  const btnLinkedinGiancarlo = () =>{
    window.location.href = 'https://www.linkedin.com/in/jeffrey-moreno-flores-83752023b/'
  }
  const btnLinkedinDeny = () =>{
    window.location.href = 'https://www.linkedin.com/in/deny-mendoza-guelac-9b0a70281/'
  }


  const [count, setCount] = useState(20);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const div = document.getElementById('imgContador');
      const rect = div.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible && count > 4) {
      const interval = setInterval(() => {
        setCount((prevCount) => Math.min(prevCount - 1, 20));
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isVisible, count]);




  return (
    <div className={style.container} >
       <div className={style.titulo}>
        <h2>Integrantes {count}</h2> 
       </div>
       <div>
        <div className={style.containerAlumno}>
          <h1>
            Julio Maravi Carranza 
          </h1>
          <img className={style.fotoIntegrante} src="https://media.licdn.com/dms/image/C4E03AQGPGkgO-ldRfA/profile-displayphoto-shrink_800_800/0/1649711878945?e=1695859200&v=beta&t=JhXo61qzVI4s-0WRFbHvqrpkjHtR_xSTNv_Hhimo9oY" id="imgContador">
          </img>
          <div>
          <img className={style.integrante} src="https://www.freepnglogos.com/uploads/linkedin-basic-round-social-logo-png-13.png"
          onClick={btnLinkedinJulio}>
          </img>     
          </div>
        </div>
        <div>
          <h1>
            Fatima Mori Blanco
          </h1>
         </div>
          <img className={style.fotoIntegrante} src={imgFat}>
          </img>
          <div>
          <img className={style.integrante} src="https://www.freepnglogos.com/uploads/linkedin-basic-round-social-logo-png-13.png"
          onClick={btnLinkedinFatima}>
          </img>     
          </div>
         <div>
          <h1>
            Giancarlo Moreno Flores
          </h1>
          <img className={style.fotoIntegrante} src='https://media.licdn.com/dms/image/D4E03AQGmPkvuG8eJKQ/profile-displayphoto-shrink_800_800/0/1689996802690?e=1695859200&v=beta&t=aJJo-hdYWT3uWuZEl7ZT_yAJhl28cBYWR_CDuqiys8Y'
          >
          </img>
          <div>
            <img className={style.integrante} src="https://www.freepnglogos.com/uploads/linkedin-basic-round-social-logo-png-13.png"
          onClick={btnLinkedinGiancarlo}>
            </img>     
          </div>
         </div>
         <div>
          <h1>
            Deny Mendoza Guelac
          </h1>
          <img  className={style.fotoIntegrante} src={imgDeny}>
          </img>
          <div>
            <img className={style.integrante} src="https://www.freepnglogos.com/uploads/linkedin-basic-round-social-logo-png-13.png"
            onClick={btnLinkedinDeny}>
            </img> 
          </div>
         </div>
       </div>
    </div>
    
  )
}

export default Conocenos