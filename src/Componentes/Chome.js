import React, { Fragment } from 'react';
import Swal from 'sweetalert2';


const Chome = (props) => {

const  ValidarDatos= () => {
    if(props.user===''){
       
        Swal.fire({
            title: 'Advertencia',
            text: 'Diligencie Su Nombre Primero',
            icon: 'warning',
            confirmButtonText: 'Aceptar'
          })
    }else{
        props.setValidarDato(props.user)
        props.setClaseOcultar("d-md-none")
    }
}

    return ( 
    

    <Fragment>
        <div className="inicio-global cuadro-inicio ">

        <h3>INSTRUCCIONES👇👇👇 <br></br> ⭐¡responde cada unas de las preguntas y al final veras el resultado!⭐</h3><br></br>
        
        <div>
            <p>total de preguntas: <span className="total-preguntas">➡5⬅</span></p>
            <div>
                
             <br></br>EMPEZEMOS⬇⬇<br></br>
                </div>
        </div>
        <div> 
        <button type="button" class="btn" onClick={ValidarDatos}>Iniciar Preguntas </button>
    
    </div>

    </div>

 </Fragment>
     );
}

 
export default Chome;