import React from "react";
import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import DanielRegular from '../../fonts/DanielRegular.ttf';

const ContainerNav = styled.div`
background-color: rgba(240, 248, 255, 1);
padding: 8px;
`



const Nav = (props)=> {
  return (
    <ContainerNav>
    

    <SearchBar onSearch={(characterID) => props.onSearch(characterID)}/>
    </ContainerNav>
  )
}

export default Nav