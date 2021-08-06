
import React, { Fragment } from 'react';


const NOMBREUSUARIO = (props) => {
  
  const CapturarUsuario = (e) => {
   
   props.setUser(e.target.value)
  
  }
  let clase=`global-usu ${props.ClaseOcultar}` 

  
  return ( 
<Fragment>
        <div className="text">
    
        <p>🙋‍♂️NOMBRE DE USUARIO: &nbsp;  &nbsp; {props.ValidarDato}</p>
     
        <div className={clase}>
        <input type="text"  placeholder="➡➡➡DIGITE SU NOMBRE AQUI⬅⬅⬅" onChange={CapturarUsuario} ></input>
         
          </div> 
           
        </div>
        
        <div>
          
        </div>
        </Fragment>
     );
}
 
export default NOMBREUSUARIO;