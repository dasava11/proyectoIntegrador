import { useState, useEffect }  from "react";
import { useParams } from "react-router-dom";
/* import styles from './Detail.module.css'; */

const Detail = (props)=>{
    const {detailId} = useParams()
    const [character, setCharacter] = useState({})

useEffect(() => {
  fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
    .then((response) => response.json())
    .then((char) => {
      if (char.name) {
        setCharacter(char);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    })
    .catch((err) => {
      window.alert("UPS!!! Algo salió mal");
    });
  return setCharacter({});
}, /* [id] */);

    return(
        <div>
            <h1>Name: {character.name}</h1>
            <h3>Status: {character.status}</h3>
            <h3>Especie: {character.specie}</h3>
            <h3>Género: {character.gender}</h3>
            <h3>Origen: {character.origin} </h3>
            <img src="" alt="personaje" />
        </div>
    )
};

export default Detail;