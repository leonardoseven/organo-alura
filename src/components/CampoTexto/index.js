import { useState } from 'react';
import './CampoTexto.css';

const CampoTexto = (props) =>{

    const placeholderModificada = `${props.placeholder}...`;

    // let valor = ''

    //se usar o useState no componente ele se perde 
    //quando tem mais de um elemento junto, por isso deve
    //delegar para o pai o useState

    //const [valor, setValor] = useState('')

    //const aoDigitar = (event) =>{
    //    setValor(event.target.value)
    //    console.log(valor)
    //}
    const aoDigitar = (event) =>{
        props.aoAlterar(event.target.value);
        console.log(event.target.value)
    }

    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )

}

export default CampoTexto;
//function CampoTexto(){

    //return(



   // )

//}