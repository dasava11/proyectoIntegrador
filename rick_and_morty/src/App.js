import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About";
import Nav from "./components/Nav/Nav.jsx";
import Login from "./components/Login/Login";
import Detail from "./components/Detail/Detail";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const location = useLocation()
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const EMAIL = 'ing27.david@gmail.com'
  const PASSWORD = 'R@ftel27'
  const navigate = useNavigate()

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          // Verificar si el personaje ya está en el estado
          const characterIds = characters.map((char) => char.id);
          if (!characterIds.includes(data.id)) {
            setCharacters((chars) => [...chars, data]);
          } else {
            window.alert("El personaje ya fue agregado");
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    const print = characters.filter((char) => char.id !== id);
    setCharacters(print);
  };

  function login(userData){
    if (userData.username === EMAIL && userData.password === PASSWORD) {
    setAccess(true)
    navigate('/home')
    };
  };

  useEffect(() => {
    !access && navigate('/');
 }, [access, navigate]);
 

  return (
    <div className="App">
      {location.pathname !== '/' &&
      <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
