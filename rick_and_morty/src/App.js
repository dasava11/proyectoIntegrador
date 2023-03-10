import './App.css'
import React, {useState} from 'react'
import Cards from './components/Cards/Cards.jsx'
import Portada from './components/Portada/Portada.jsx'
import Nav from './components/Nav/Nav.jsx'


function App () {
  const [characters, setCharacters] = useState([])



  const onSearch = (character)=>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response)=> response.json())
    .then((data) => {
      if (data.name) {
        setCharacters((chars)=> [... chars, data]);
      } else {
        window.alert('No hay personajes con ese ID')
      }
    })
   
  }

  return (
    <div className='App'>
       <Nav onSearch={onSearch} />
       <div>
       <Portada/>
       </div>
       
      <div className='principal'>
        <Cards
          characters={characters}
        />
      </div>

    </div>
  )
  
}

export default App
