import React from 'react'

const Cita = ({cita, eliminarCita}) => {
    return(
        <div className="cita">
            <p>Nombre: <span>{cita.apellido}</span></p>
            <p>Apellido: <span>{cita.apellido}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora:<span>{cita.hora}</span></p>
            <p>Comentarios:<span>{cita.comentarios}</span></p>
            <button 
            className="button u-full-width"
            onClick={() =>eliminarCita(cita.id)}
            
            >
                eliminar
            </button>
            


        </div>
    );
}

export default Cita;