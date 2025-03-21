import React, { useState } from 'react';
import styled from 'styled-components';
import DanielRegular from '../../fonts/DanielRegular.ttf';

const Busqueda = styled.div`
display: flex;
justify-content: flex-end;
font-family: 'DanielRegular', 'Trebuchet MS';
@font-face {
    font-family: 'DanielRegular';
    src: url(${DanielRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
}
`

const SearchP = styled.input`
background-color: lawngreen;
opacity: 0,1;
color: black;
font-family: 'DanielRegular', 'Trebuchet MS';
@font-face {
    font-family: 'DanielRegular';
    src: url(${DanielRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
}
font-size: 1.2rem;
text-align: center;
padding: 3px 3px 3px 3px;
border: solid 2px indigo;
border-radius: 5px 0px 0px 5px;
`
const BotonB = styled.button`
border: solid 2px indigo;
padding: 3px 10px;
background-color: rgba(240, 248, 255, 1);
font-family: 'DanielRegular', 'Trebuchet MS';
@font-face {
    font-family: 'DanielRegular';
    src: url(${DanielRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
}
font-size: 1.2rem;
font-weight: bold;
color: black;
border-radius: 0px 5px 5px 0px;
cursor: pointer;
`

export default function SearchBar(props) {
    console.log(props);
const [character, setCharacter] = useState('')

const handleInputChange = (event) => {
    const {value} = event.target
    // console.log(value)
    setCharacter(value); 
    /* setCharacter(value= '') */
}

const handleClick = ()=>{
    props.onSearch(character)
    setCharacter('')
}

const handleKey = (event)=>{
if(event.key==='Enter'){
    props.onSearch(character)
    setCharacter('')
}

}

   return (
      <Busqueda>
        {console.log('aqui: ', character)}
         <SearchP type='search' placeholder="Buscar un personaje" onChange={handleInputChange} onKeyDown={handleKey}/>
      <BotonB onClick={handleClick}>Agregar</BotonB>
      </Busqueda>
   );
}
