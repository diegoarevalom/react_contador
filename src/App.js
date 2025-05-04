import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/logo_freecodecamp.png';
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClick = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <h1 className='text-2xl'>Contador de Clicks</h1>
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClics={numClics}

        />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClick={manejarClick}
        />

        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClick={reiniciarContador}
        />


      </div>
    </div>
  );
}

export default App;
