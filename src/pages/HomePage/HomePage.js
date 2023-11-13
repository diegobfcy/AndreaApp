import React from 'react';
import Toolbar from '../../components/Toolbar/Toolbar'; // Asegúrate de tener el componente Toolbar en el mismo directorio o ajusta la ruta
import HomeLayout from '../../components/HomeLayout/HomeLayout';


const HomePage = () => {
  return (
    <div>
      {/* Puedes agregar más componentes según tus necesidades */}
      <Toolbar />
      <HomeLayout/>
      <div className="HomePage-MainContainer">

      </div>
    </div>
  );
};

export default HomePage;