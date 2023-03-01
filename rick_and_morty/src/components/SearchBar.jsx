export default function SearchBar(props) {
   return (
      <div>
         <input type='search' placeholder="Busca un personaje"/>
      <button onClick={()=>props.onSearch('personaje')}>Agregar</button>
      </div>
   );
}
