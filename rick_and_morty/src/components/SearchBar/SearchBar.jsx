import styled from 'styled-components';

const SearchP = styled.input`
background-color: lawngreen;
opacity: 0,1;
color: black;
font-family: 'Trebuchet MS';
font-size: 1.6rem;
text-align: center;
padding: 5px 5px 5px 5px;
border: none;
border-radius: 5px 0px 0px 5px;
`
const BotonB = styled.button`
border: none;
padding: 5px 5px;
background-color: rgba(240, 248, 255, 1);
font-family: 'Trebuchet MS';
font-size: 1.6rem;
color: black;
border-radius: 0px 5px 5px 0px;
cursor: pointer;
`

export default function SearchBar(props) {
   return (
      <div>
         <SearchP type='search' placeholder="Busca un personaje"/>
      <BotonB onClick={()=>props.onSearch('personaje')}>Agregar</BotonB>
      </div>
   );
}
