import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const times =[
    {
      nome:'Progamação',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Front-End',
      corPrimaria:'#82cffa',
      corSecundaria:'#EBF8FF'
    },
    {
      nome:'Data Science',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'Devops',
      corPrimaria:'#E06869',
      corSecundaria:'#FDE7E8'
    },
    {
      nome:'UX e Design',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5'
    },
    {
      nome:'Mobile',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoSalvarNovoColaborador = (colaborador) =>{
    console.log(colaborador)
    //Replica a lista anterior e adiciona um item na ultima posicao
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoSalvarNovoColaborador={colaborador => aoSalvarNovoColaborador(colaborador)}/>
      {/* <Formulario aoSalvarNovoColaborador={function (colaborador) {aoSalvarNovoColaborador(colaborador)}}/> */}
      
      {times.map( time => <Time 
        key={time.nome} 
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}
      />)}
      

    </div>
  );
}

export default App;
