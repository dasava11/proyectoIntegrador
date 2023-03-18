import { useState, useEffect }  from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from './Detail.module.css';
import DanielRegular from '../../fonts/DanielRegular.ttf';

const Detail = (props)=>{
    const navigate = useNavigate();
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
}, [detailId]);

    return(
      <div className={styles.margen}>
        <div className={styles.contenedorP}>
          <div className={styles.info}>
            <h1>Name: {character.name}</h1>
            <h2>Status: {character.status}</h2>
            <h2>Especie: {character.species}</h2>
            <h2>Género: {character.gender}</h2>
            <h2>Origen: {character.origin?.name}</h2>
            <h2>Locación: {character.location?.name}</h2>
          </div>
            <img src={character.image} alt="personaje" className={styles.foto}/>
        </div>
        <button className={styles.back} onClick={()=>navigate('/home')} >Volver</button>
      </div>
    )
};

export default Detail;