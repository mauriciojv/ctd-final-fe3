import { createContext, useContext, useState, useReducer, useEffect } from "react";
import axios from 'axios' 
import { useParams } from "react-router-dom";

const CharsStates = createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'GET_CHARS':
            return {...state, chars: action.payload}
        case 'GET_CHAR':
            return {...state, char: action.payload}
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]}
        throw new Error()
    }

}


const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavsState = localFavs ? localFavs : []

const initialState = {
  chars: [],
  char: {},
  favs: initialFavsState,
  
}

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const url = 'https://jsonplaceholder.typicode.com/users'
/*
  const [chars] = useState([])
  const [favs, setFavs] = useState(initialFavsState)
*/

useEffect(() => {
  axios(url)
  .then(res => {
      console.log(res.data)
      dispatch({type: 'GET_CHARS', payload: res.data})})
  .catch(err => console.log(err))
}, [])

useEffect(() => {
  localStorage.setItem('favs', JSON.stringify(state.favs))
}, [state.favs])




  return (
    <CharsStates.Provider value={{dispatch, state}}>
      {children}
    </CharsStates.Provider>
  );
};


export default Context; 



export const useCharStates =() => useContext(CharsStates)