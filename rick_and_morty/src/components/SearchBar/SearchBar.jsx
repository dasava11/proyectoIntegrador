import styled from 'styled-components';
import DanielRegular from '../../fonts/DanielRegular.ttf';

const Busqueda = styled.div`
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
font-size: 1.6rem;
text-align: center;
padding: 5px 5px 5px 5px;
border: none;
border-radius: 5px 0px 0px 5px;
`
const BotonB = styled.button`
border: none;
padding: 5px 10px;
background-color: rgba(240, 248, 255, 1);
font-family: 'DanielRegular', 'Trebuchet MS';
@font-face {
    font-family: 'DanielRegular';
    src: url(${DanielRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
}
font-size: 1.6rem;
font-weight: bold;
color: black;
border-radius: 0px 5px 5px 0px;
cursor: pointer;
`

export default function SearchBar(props) {
   return (
      <Busqueda>
         <SearchP type='search' placeholder="Busca un personaje"/>
      <BotonB onClick={()=>props.onSearch('personaje')}>Agregar</BotonB>
      </Busqueda>
   );
}
