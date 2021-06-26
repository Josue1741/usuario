import React, { Fragment, useState } from "react";
import {v4 as uuid} from "uuid"; // 10-  instalamos npm i uuid
 // ** 15. en los parentesis del formulario meto un destructuring para pasar la cita pasando de const Formulario = () => { a //co
const Formulario = ({crearCita}) => {
    //1. crear estado para la cita
    //setCita =actualizarCita
    const [cita, setCita] = useState({
        nombre: '',
        apellido:'',
        fecha:'',
        hora:'',
        comentarios: '',
    })
    //6. crear estado para comprobar la autenticación
    //setError = actualiarError
    const [error, setError] = useState(false)
    //2. crear función para cuando el usuario escriba sus datos en el input
    const actualizarState  = (e) => {
        setCita({
            ...cita,//guarda los datos; copiamos los datos que el usuario va rellenando con spread operator y después se rescribe en el campo [event.target.name] que es el que está reescribiendo y tomando el valor de event.target.value
            [e.target.name]: e.target.value
        })
    } //console.log('escribiendo...');
  //3. extraer los valores del formulario con destructuring, se hace para no tener que acceder  a cada valor de cita  a través de la sintaxis de punto. Es decir si por ejemplo quiero acceder al nombre no hago cita.nombre
    const { nombre, apellido, fecha, hora, comentarios} = cita
    //4. para enviar el formulario cuando el usario clica enviar cita
    const submitCita = (e) =>{
        e.preventDefault();
        //console.log('Enviando')
         //5. validación de cita en el formulario. El método trim() me ayuda a eliminar los espacios que el usuario pueda dejar delante o detrás de la palabra
        if(nombre.trim()==='' || apellido.trim() ==='' || fecha.trim()==='' || hora.trim()==='' || comentarios.trim()==='' ){
            setError(true);//si hay error que salga un mensaje de error
            return
        }
        //*****9 eliminar el mensaje previo  de error
        setError(false);// si luego no hay error que quite el mensaje en rojo
        //*** 8. asignar un id que me creo yo. 
        //cita.id=20;
        //console.log(cita);
        //***11- reemplazo   cita.id=20; del paso 8 por*
        cita.id= uuid(); //id unico
        //console.log(cita);
        //compruebo por consola que me da un id aleatorio
        //***16 -Crear la cita y pasamos la cita  dentro del parentiss. En  en este momento ya tendrá el id y esto hará que se mande la cita a la consola 
        crearCita(cita);
        setCita({
          nombre:'',
          apellido:'',
          fecha:'',
          hora:'',
          comentarios:'',
        })
    }

  return (
    <Fragment>
      {/*******************7-sacar un error */}
        {error ? <p className="alerta-error">Todos los campos son obligatorios</p> :null}
        <h2>Elija su cita</h2>
        <form 
            onSubmit={submitCita}
        >
      <label>Nombre</label>
      <input
        type="text"
        name="nombre" 
        className="u-full-width"
        placeholder="Nombre del usuario"
        onChange={actualizarState}
        value={nombre}
      />
      <label>Apellido</label>
      <input
        type="text"
        name="apellido" 
        className="u-full-width"
        placeholder="Apellido del usuario"
        onChange={actualizarState}
        value={apellido}
      />
      <label>Fecha</label>
      <input type="date" name="fecha" className="u-full-width" onChange={actualizarState} value={fecha} />
      <label>Hora</label>
      <input type="time" name="hora" className="u-full-width" onChange={actualizarState} value={hora}/>
      <label>Comentarios</label>
      <textarea
          className="u-full-width"
          name="comentarios"
          onChange={actualizarState}
          value={comentarios}
          >
      </textarea>
      <button
        type="submit"
        className="u-full-width button-primary"
      >
          Agregar
      </button>
    </form>
    </Fragment>
  );
};
export default Formulario;