import React, { useEffect } from "react";
import { useState } from "react";


const Form = () => {
    
  const [paciente, setPaciente] = useState({
    nombre: '',
    email: ''
})
 


const [show, setShow] = useState(false)
const [error, setError] = useState(false) 

const handleSubmit = () => {
  event.preventDefault
    if(paciente.nombre.length > 5 && paciente.email.length > 7){
        setShow(true)
        setError(false)
    } else {
        setError(true)
    }
}


console.log(paciente)

  return (
    <div className="form">
        <form>
            <label>Nombre del paciente</label>
            <input className='inputFrom' value={paciente.nombre} type="text" id="fname" placeholder="Escribe tu nombre completo"
            onChange={(event) => setPaciente({...paciente, nombre: event.target.value})}
            />
        

            <label>Email</label>
            <input className='inputFrom'  value={paciente.email} type="email" id="name" placeholder="tucorreo@ejemplo.com"
            onChange={(event) => setPaciente({...paciente, email: event.target.value})}
            />

            <button onClick={handleSubmit} type="submit" id="submit" className="subtmitForm">Enviar</button>

            {show && <h3>Gracias por escribirnos {paciente.nombre}, te contactaremos cuando antes vía mail</h3>}
        {error && <h4 style={{color: 'red'}}> Por favor verifique su información nuevamente</h4>}

        </form>
   
       
    </div>
  )
};

export default Form;


