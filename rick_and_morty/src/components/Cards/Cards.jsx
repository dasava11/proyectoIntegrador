
import Card from '../Card/Card';
import styled from 'styled-components';

const CardS = styled.div`
display: flex;
justify-content: space-around;


`

export default function Cards(props) {
   const { characters } = props;
   return <CardS>
      {characters.map(({id, name, species, gender, image, onClose})=>(
         <Card
            key={id}
            name={name}
            image={image}
            species={species}
            gender={gender}
            onClose={() => alert('Emulamos que se cierra la card')}
         /> 
      ))}
   </CardS>;
}

