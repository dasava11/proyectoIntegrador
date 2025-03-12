import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import DanielRegular from '../../fonts/DanielRegular.ttf';
import imageP from '../../image/logo.png'

const ContainerNav = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: rgba(240, 248, 255, 1);
padding: 8px;
`
const Front = styled.img`
display: flex;
/* justify-content: flex-start; */
height: 50px;
padding-bottom: 10px;
/* position: absolute; */
top: 8px;
left: 20px;
/* z-index: auto; */
`


const Nav = (props)=> {
  console.log(props);
 
  return (
    <ContainerNav>
    <Front className='portada' src={imageP} alt='Portada'/>
    <NavLink to='/home'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <SearchBar onSearch={(characterID) => props.onSearch(characterID)}/>
    
    </ContainerNav>
  )
}

export default Nav