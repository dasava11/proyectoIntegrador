/* import { Component } from 'react'; */
import Card from '../Card/Card';
import styled from 'styled-components';
/* import DanielRegular from '.../fonts/DanielRegular.ttf'; */

const CardS = styled.div`
display: flex;
justify-content: space-around;
/* font-family: 'Trebuchet MS'; 
color: lawngreen; */
`
/* src: url(${DanielRegular}) format('truetype'); */

export default function Cards(props) {
   const { characters } = props;
   return <CardS>
      {characters.map((p)=>(
         <Card
            key={p.id}
            name={p.name}
            image={p.image}
            species={p.species}
            gender={p.gender}
            onClose={() => alert('Emulamos que se cierra la card')}
         /> 
      ))}
   </CardS>;
}
