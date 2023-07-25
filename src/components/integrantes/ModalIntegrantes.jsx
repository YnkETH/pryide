import React,{ useState }  from 'react';
import './ModalIntegrantes.css'; 


const ModalIntegrantes = ({ isOpen, onClose }) => {
    

  const [email, setEmail] = useState('');

  if (!isOpen) return null;
  const handleChange = (e) => {
    setEmail(e.target.value);
  };



  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>¡Escribe tu correo!</h2>
        <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Ingresa tu correo electrónico"
        required
      />
        <button onClick={onClose} className="btnModal" type='email'>Listo</button>
      </div>
    </div>
  );
};

export default ModalIntegrantes;