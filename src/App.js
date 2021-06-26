import React, { Fragment, useState, useEffect  } from "react";
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  let citasIniciales = localStorage.getItem('todasCitas');
  if (!citasIniciales){
    citasIniciales =[];
  }




  //12.crear un array para todas las citas con su estado 
  const [todasCitas, setTodasCitas] = useState([citasIniciales]);
  
  useEffect(() =>{
    let citasIniciales = JSON.parse(localStorage.getItem('todasCitas'));
    //si hay citasIniciales entonces lo ponemos en el localStorage
    if(citasIniciales){ localStorage.setItem('todasCitas', JSON.stringify(todasCitas))
    }else{
      //Pero si no hay citasIniciales agrega un array vacío
      localStorage.setItem('todasCitas', JSON.stringify([]));
    }
   }, [todasCitas]);





  const crearCita = (cita) => {
    console.log(cita);
    //17.seteamos las citas
    setTodasCitas([
      ...todasCitas, //guardamos con spread operator
      cita
    ]);
  };

  // const eliminarCita=(id) =>{
      // console.log(id);

   // }




    
  const eliminarCita =(id) =>{
    const nuevasCitas = todasCitas.filter((cita) => cita.id !==id) 
    setTodasCitas(nuevasCitas);   
  };



  const titulo = 
  todasCitas.length === 0 ? "No has elegido ninguna cita" : "Administre su cita "
  
  
  return (
    <Fragment>
      <h1>Usuarios</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
       {/*14. Traigo la cita para después llamarla de forma reactiva o dinamica*/}
            <Formulario
            crearCita={crearCita}
           />
           </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {todasCitas.map((cita, index)=>{
              return(
                <Cita
                key={cita.id, index}
                cita={cita}
                eliminarCita={eliminarCita}

                />
              )
            })}
          </div>
        </div>
      </div>    
    </Fragment>
  );
}
export default App;