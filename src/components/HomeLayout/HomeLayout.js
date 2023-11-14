import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomeLayout.css'; // Asegúrate de tener un archivo CSS para estilos
import backgroundImg from '../../assets/icons/AndreaFondoImg.png'; // Ajusta la ruta de tu imagen
import AndreaLink from '../../assets/icons/AndreaLink.png';


const HomeLayout = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navega a la página "bienvenida-page" al hacer clic en el botón
    navigate('/bienvenida-page');
  };

  return (
    <div className="HomeLayout-MainContainer">
      <div className="HomeLayout-Background">
        <img src={backgroundImg} alt="Background" className="HomeLayout-BackgroundImage" />
      </div>
      <div className="HomeLayout-CenterContent">
        <img
          src={AndreaLink}
          alt="Imagen Centrada"
          className="HomeLayout-CenteredImage"
        />
        <button className="HomeLayout-Boton" onClick={handleButtonClick}>Empieza ahora</button>
      </div>

    </div>
  );
};

export default HomeLayout;