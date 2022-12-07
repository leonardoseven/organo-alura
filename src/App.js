import { useState } from 'react';
import Banner from './components/Banner';
import CampoTexto from './components/CampoTexto';
import Formulario from './components/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoSalvarNovoColaborador = (colaborador) =>{
    console.log(colaborador)
    //Replica a lista anterior e adiciona um item na ultima posicao
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoSalvarNovoColaborador={colaborador => aoSalvarNovoColaborador(colaborador)}/>
    </div>
  );
}

export default App;
