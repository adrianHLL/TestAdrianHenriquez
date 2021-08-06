
import './App.css';
import React, { Fragment, useState }  from 'react';
import Cnombre from './Componentes/Cnombre';
import Chome from './Componentes/Chome';
import CPreguntasVi from './Componentes/CPreguntasVi';
import CResultado from './Componentes/CResultado';

function App() {
  
  const [ValidarDato, setValidarDato] = useState('')    
   const [user, setUser] = useState('')
   const [ClaseOcultar, setClaseOcultar] = useState('')
  //  const [ClaseOcultarResultado, setClaseOcultarResultado] = useState('d-md-none')
   const [ContadorGlobal, setContadorGlobal] = useState(1)
   const [Test1, setTest1] = useState(0)
   const [Test2, setTest2] = useState(0)
   const [Test3, setTest3] = useState(0)
   const [Test4, setTest4] = useState(0)
   const [Test5, setTest5] = useState(0)
  //  const [NotaDefinitiva, setNotaDefinitiva] = useState(0)



   let ComponenteActual;

if(ValidarDato===''){
    ComponenteActual= <Chome setValidarDato={setValidarDato} user={user}  setClaseOcultar={setClaseOcultar} />
}else if(ContadorGlobal!==5){
  ComponenteActual= <CPreguntasVi setTest1={setTest1} setTest2={setTest2} setTest3={setTest3} setTest4={setTest4} setTest5={setTest5} setContadorGlobal={setContadorGlobal} />
}
else if(ContadorGlobal===5){
 ComponenteActual=<CResultado ContadorGlobal={ContadorGlobal} Test1={Test1} Test2={Test2} Test3={Test3} Test4={Test4} Test5={Test5} />
}
  return (

    //HOME
<Fragment>
<Cnombre setUser={setUser} ClaseOcultar={ClaseOcultar} ValidarDato={ValidarDato}   />
{ComponenteActual}

</Fragment>

  
     //FIN HOME     

 
  );
}

export default App;
