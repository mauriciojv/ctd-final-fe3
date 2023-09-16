import React from "react";
import Card from "../Components/Card";
import { useCharStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useCharStates()
  
  

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        
        {state.favs.map(fav => <Card char={fav} key={fav.id}/> )}
        
      </div>
    </>
  );
};

export default Favs;
