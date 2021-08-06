import React, { Fragment, useState } from 'react';
import {test}  from '../Test';

const CPreguntasVi = (props) => {
  
var titulo, opcion1, opcion2,opcion3,opcion4,respuesta1,respuesta2,respuesta3,respuesta4,respuesta5

const [Contador, setContador] = useState(0) 
const [BtnActivo, setBtnAtivo] = useState(false) 
const [ColorIndicador1, setColorIndicador1] = useState("Nomarcada") 
const [ColorIndicador2, setColorIndicador2] = useState("Nomarcada") 
const [ColorIndicador3, setColorIndicador3] = useState("Nomarcada") 
const [ColorIndicador4, setColorIndicador4] = useState("Nomarcada") 
const [ColorIndicador5, setColorIndicador5] = useState("Nomarcada") 
const BtnSiguiente = () => {
    setContador(Contador+1)
    setBtnAtivo(false)
   props.setContadorGlobal(Contador+1)
}
 

titulo= test[Contador].q

opcion1=test[Contador].opciones[0]
opcion2=test[Contador].opciones[1]
opcion3=test[Contador].opciones[2]
opcion4=test[Contador].opciones[3]

respuesta1=test[0].respuesta

respuesta2=test[1].respuesta
respuesta3=test[2].respuesta
respuesta4=test[3].respuesta
respuesta5=test[4].respuesta
var a 

const  RespuestaN1 = (e) => {
    a =e.target.value
    

    if(Contador===0){
        console.log("soy la pregunta 1")
        console.log("marque  "+a)
       if(a==respuesta1){
        props.setTest1(1)
        setColorIndicador1("correcto")
        setBtnAtivo(true)
       }else{
        props.setTest1(0) 
        setBtnAtivo(true)
        setColorIndicador1("incorrecto")
       }

    }else if(Contador===1){
        console.log("soy la pregunta 2")
        console.log("marque  "+a)
        if(a==respuesta2){
            props.setTest2(1)
            setColorIndicador2("correcto")
            setBtnAtivo(true)
        }else{
            props.setTest2(0)
            setColorIndicador2("incorrecto")
            setBtnAtivo(true)
            
           }
    

    }else if(Contador===2){
        console.log("soy la pregunta 3")
        console.log("marque  "+a)
        if(a==respuesta3){
            props.setTest3(1)
            setColorIndicador3("correcto")
            setBtnAtivo(true)
        }else{
            props.setTest3(0)
            setColorIndicador3("incorrecto")
            setBtnAtivo(true)
           }
    }else if(Contador===3){
        console.log("soy la pregunta 4")
        console.log("marque  "+a)
        if(a==respuesta4){
            props.setTest4(1)
            setColorIndicador4("correcto")
            setBtnAtivo(true)
        }else{
            props.setTest4(0)
            setColorIndicador4("incorrecto")
            setBtnAtivo(true)
           }

    }else if(Contador===4){
        console.log("soy la pregunta 5")
        console.log("marque  "+a)
        if(a==respuesta5){
            props.setTest5(1)
            setColorIndicador5("correcto")
            setBtnAtivo(true)
        }else{
            props.setTest5(0)
            setColorIndicador5("incorrecto")
            setBtnAtivo(true)
           }

    }

} 
// props.setNotaDefinitiva(props.Test1+props.Test2+prop.sTest3+props.Test4+props.Test5)
    return ( 
        
          <Fragment> 
        <div className="preguntas-global  cuadro-inicio  ">
             <p>PREGUNTAS</p>
        <div className="numero-preguntas">
        <p>Pregunta {Contador+1} /5</p>
        </div>
           
        <div className="texto-preguntas">
       {titulo}
        </div>
    
        <div className="opciones-contenedor animacion">
        
        <div className="opciones animacion">
            
        <button type="button" className="preguntas-global opciones-contenedor opcione botonesRespuesta" onClick={RespuestaN1} value={opcion1} disabled={BtnActivo}>{opcion1}</button>  
            </div>
        <div className="opciones animacion">

        <button type="button"  className="preguntas-global opciones-contenedor opcione botonesRespuesta" onClick={RespuestaN1} value={opcion2} disabled={BtnActivo} >{opcion2}</button>  
    
         </div>
        <div className="opciones animacion" >
        <button type="button"className="preguntas-global opciones-contenedor opcione botonesRespuesta" onClick={RespuestaN1} value={opcion3} disabled={BtnActivo}>{opcion3}</button>  
            </div>
        <div className="opciones animacion">
        <button type="button" className="preguntas-global opciones-contenedor opcione botonesRespuesta" onClick={RespuestaN1} value={opcion4} disabled={BtnActivo}>{opcion4}</button> 
         </div>
    
        </div>
    
        <div className="siguientebtn">
            <button type="button" class="btn " onClick={BtnSiguiente}>siguiente</button>
        </div>
        <div className="indicardor-respuesta">
        <div className={ColorIndicador1}><p className="parrafo">1</p></div>
        <div className={ColorIndicador2}><p className="parrafo">2</p></div>
        <div className={ColorIndicador3}><p className="parrafo">3</p></div>
        <div className={ColorIndicador4}><p className="parrafo">4</p></div>
        <div className={ColorIndicador5}><p className="parrafo">5</p></div>
        </div>
    </div>
    
    </Fragment>
     );
}
 
export default CPreguntasVi;