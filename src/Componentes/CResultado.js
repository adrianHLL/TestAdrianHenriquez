import React, { Fragment } from 'react';



const CResultado = (props) => {
   let clase=`resultado-global cuadro-inicio`
   var Definitiva = props.Test1 + props.Test2 + props.Test3 + props.Test4 + props.Test5
var ContadorIncorrecta= 5-Definitiva;
var observacion
if(Definitiva>=3){
    observacion="Aprobo"
}else{
    observacion="Reprobo"
}

const SALIR = () => {
    window.location.reload(true);
}
 


    return ( 
        <Fragment> 

<div className={clase}>
        <h1>🤔RESULTADO DEL TEST🤔</h1>
        <table>
            <tr>
                <td>TOTAL DE PREGUNTAS</td>
                <td><span className="total-preguntas">5</span></td>
            </tr>
           
    
            <tr>
                <td>RESPUESTAS CORRECTAS</td>
                <td><span className="total-correctas">{Definitiva}</span></td>
            </tr>
            <tr>
                <td>RESPUESTAS INCORRECTAS</td>
                <td><span className="total-incorrectas">{ContadorIncorrecta}</span></td>
            </tr>
            
            <tr>
                <td>PUNTAJE</td>
                <td><span className="total-puntaje">{Definitiva}/5</span></td>
            </tr>
        <tr>
                <td>OBSERVACION</td>
                <td><span className="total-observacion">{observacion}</span></td>
            </tr>
            
    
        </table>
    
        <button type="button" className="btn" onClick={SALIR} >inicio</button>
    </div>
          </Fragment>
     );
}
 
export default CResultado ;













