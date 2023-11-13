import React from 'react';
import './BienvenidaPage.css'; // Asegúrate de tener un archivo CSS para estilos
import AndreaLetras from '../../assets/icons/AndreaLetras.png';
import RightArrow from '../../assets/icons/RightArrow.png';

const BienvenidaPage = () => {
  return (
    <div className="BienvenidaPage-MainContainer">
      <div className='BienvenidaPage-BienvenidaContent'>
        <div className="BienvenidaPage-TextWithImage">
          <p className="BienvenidaPage-AksharFontText">BIENVENIDO A </p>
          <img src={AndreaLetras} alt="Akshar Font" className="BienvenidaPage-Image" />
        </div>
        <div className="BienvenidaPage-TextBox">
          <p className="BienvenidaPage-InterFontText">
            Nosotros somos una solución diseñada para enseñar a las personas de la tercera edad a utilizar la tecnología de manera efectiva. Combina una metodología centrada en la calidad, la motivación y la simplificación del aprendizaje con innovadoras herramientas, como un aula virtual y un asistente de voz, para mejorar la conectividad y habilidades digitales de los adultos mayores.
          </p>
        </div>
        <div className="BienvenidaPage-BotonWithArrow">
          <span className="BienvenidaPage-Boton" onMouseOver={(e) => e.target.style.textDecoration = 'underline'}>
            Continuar
          </span>
          <img src={RightArrow} alt="Arrow" className="BienvenidaPage-Arrow" />
        </div>
      </div>  
    </div>
  );
};

export default BienvenidaPage;
