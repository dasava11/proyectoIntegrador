import styled from 'styled-components';
/* import DanielRegular from '.../fonts/DanielRegular.ttf'; */

const RickCard = styled.div`
display: flex;
flex-direction:column;
padding-top: 10px;
align-items: center;
font-family: 'Trebuchet MS';
color: lawngreen;
border: solid 3px;
height: 340px;
width: 250px;
border-radius: 25px;
margin: 0 auto;

&:hover{
   transition: all 0.2s ease;
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
const InfoP = styled.h2`
margin: 0px;
`
const DatosP = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin: 7px 0px 0px 0px;
border: none;
border-radius: 0px 0px 23px 23px;
width: 100%;
background-color: lawngreen;
color: black;
padding-bottom: 5px;
`

const ImagenP = styled.img`
height: 220px;
border-radius: 200px;
box-shadow: 2px 2px 5px rgba(240, 248, 255, 1);
margin: 5px 0px 5px 0px;

`

export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <RickCard>
         <BotonR onClick={onClose} key={id} >close</BotonR>
         <InfoP>{name}</InfoP>
         <ImagenP  src={image} alt="Not found" />
      <DatosP>
         <InfoP>{species}</InfoP>
         <InfoP>{gender}</InfoP>
      </DatosP>
      </RickCard>
   );
}
