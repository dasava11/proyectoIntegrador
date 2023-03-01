import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return <div>
      {characters.map((p)=>(
         <Card
            key={p.id}
            name={p.name}
            species={p.species}
            gender={p.gender}
            image={p.image}
            onClose={() => alert('Emulamos que se cierra la card')}
         /> 
      ))}
   </div>;
}
