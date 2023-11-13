import React from 'react';
import './Toolbar.css'; // Asegúrate de tener un archivo CSS para estilos
import LogoAndrea from '../../assets/icons/LogoAndrea.png';

const Toolbar = () => {
  return (
    <div className="Toolbar-MainContainer" style={{ backgroundColor: '#1A1823' }}>
      <div className="Toolbar-Logo">
        <img src={LogoAndrea} alt="Logo" />
      </div>
      <div className="Toolbar-Buttons">
        <span className="Toolbar-ButtonInicio">Inicio</span>
        <span className="Toolbar-ButtonNosotros">Nosotros</span>
        <span className="Toolbar-ButtonPlanes">Planes</span>
        <span className="Toolbar-ButtonContactenos">Contactenos</span>
      </div>
    </div>
  );
};

export default Toolbar;
