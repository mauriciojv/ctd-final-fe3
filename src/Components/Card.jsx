import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "./utils/global.context";


const Card = ({ char }) => {

  const {dispatch} = useCharStates()
    const addFav = () => {
      dispatch({type: 'ADD_FAV', payload: char})
    }
  return (
    <div className="card">
      <Link  to={'/detail/' + char.id}>
      

        <h3>{char.name}</h3>
        <img src='./images/doctor.jpg'/>
        <h4>{char.username}</h4>

      </Link>
      <button onClick={addFav} className="favButton"> Add Fav ⭐</button>
    </div>
  );
};

export default Card;
