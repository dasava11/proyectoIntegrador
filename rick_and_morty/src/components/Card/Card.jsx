import styled from 'styled-components';
import DanielRegular from '../../fonts/DanielRegular.ttf'; 
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import { addFavorite, deleteFavorite } from '../../redux/actions';
import { useState} from 'react';

const RickCard = styled.div`
display: flex;
flex-direction:column;
justify-content: space-between;
padding-top: 10px;
align-items: center;
font-family: 'DanielRegular', 'Trebuchet MS';
@font-face {
    font-family: 'DanielRegular';
    src: url(${DanielRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
}
color: lawngreen;
border: solid 3px;
box-shadow: 0px 0px 7px rgba(240, 248, 255, 1);
/* height: 395px; */
width: 250px;
border-radius: 25px;
margin: 0 auto;
margin-bottom: 25px;
margin-top: 25px;
cursor: pointer;

&:hover{
   transition: all 0.7s ease;
   transform: scale(1.1); 
}
`
const BotonR = styled.button`
display: flex;
justify-content:right ;
border: solid 1px;
border-color: lawngreen;
background-color: indigo;
color: lawngreen;
border-radius: 7px;
cursor: pointer;

&:hover{
   transform: scale(1.1);
   background-color: lawngreen;
   color: black;
   font-weight: bold;
}
`
const InfoN = styled.h2`
margin: 0px;
height: 4px;
`
const InfoP = styled.h2`
margin: 0px;
`
const DatosP = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin: 7px 0px 0px 0px;
border: none;
border-radius: 0px 0px 21px 21px;
width: 100%;
background-color: lawngreen;
color: black;
/* padding-bottom: 5px; */
`
const ImagenP = styled.img`
height: 220px;
border-radius: 200px;
box-shadow: 2px 2px 5px rgba(240, 248, 255, 1);
margin: 5px 0px 5px 0px;
`

function Card({id, name, species, gender, image, onClose}) {

   const [isFav, setIsFav] = useState(false);

/*    useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]); */

   const handleFavorite = ()=>{
      if (isFav) {
         setIsFav(false)
         deleteFavorite(id)
      }else{
         setIsFav(true)
         addFavorite({id, name, species, gender, image, onClose})
      }
   }
 
   return (
   
   <RickCard>
      <div>
      { isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)}
      <BotonR onClick={onClose} key={id} >close</BotonR>
      </div>
      
      <InfoP>{name}</InfoP>
      <ImagenP  src={image} alt="Not found" />
         
            <DatosP>
               <InfoP>{species}</InfoP>
               <InfoP>{gender}</InfoP>
               <Link to={`/detail/${id}`}>More</Link>
            </DatosP>
         
   </RickCard>
      
   );
}

const mapDispatchToProps = (dispatch) =>{
   return{
      addFavorite: (character)=>{
         dispatch(addFavorite(character))
      },
      deleteFavorite: (id)=>{
         dispatch(deleteFavorite(id))
      }
   }
}

export default connect(null, mapDispatchToProps)(Card)