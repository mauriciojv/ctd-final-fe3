import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCharStates } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
  const {state, dispatch} = useCharStates()
  const {id} = useParams()
  
  const {name, email, phone, website} = state.char
  
  const url = 'https://jsonplaceholder.typicode.com/users/' + id
 
  
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      dispatch({type: 'GET_CHAR', payload: data})
      setLoading(false)
    })
  }, [])

  return (
    <>
     
      <h1>Detail Dentist </h1>
      <table>
        <thead>
          <tr>
            <td><h5>Nombre</h5></td>
            <td><h5>Email</h5></td>
            <td><h5>Telefono</h5></td>
            <td><h5>Website</h5></td>
          </tr>

        </thead>
        <tbody>
          <td><p>{name}</p></td>
          <td><p>{email}</p></td>
          <td><p>{phone}</p></td>
          <td><p>{website}</p></td>

        </tbody>
     
      </table>
      
  
    </>
  )
}

export default Detail