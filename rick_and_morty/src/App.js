import './App.css'
import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import Portada from './components/Portada/Portada.jsx'
import characters, { Rick } from './data.js'


function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
       <div>
       <Portada/>
       </div>
       
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
      <hr />
      <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
        />
      </div>

    </div>
  )
  
}

export default App
