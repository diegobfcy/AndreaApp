import React from 'react';
import './HomeLayout.css'; // Asegúrate de tener un archivo CSS para estilos
import backgroundImg from '../../assets/icons/AndreaFondoImg.png'; // Ajusta la ruta de tu imagen
import AndreaLink from '../../assets/icons/AndreaLink.png';


const HomeLayout = () => {
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
        <button className="HomeLayout-Boton">Empieza ahora</button>
      </div>

      {/* Contenido de tu página */}
    </div>
  );
};

export default HomeLayout;