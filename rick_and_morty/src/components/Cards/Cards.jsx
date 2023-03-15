
import Card from '../Card/Card';
import styled from 'styled-components';
import Portada from '../Portada/Portada';

const CardS = styled.div`
display: grid;
/* justify-content: space-around; */
grid-template-columns: repeat(5, 1fr);

`

export default function Cards(props) {
   const { characters } = props;
   return(
    <div>
      <Portada />
      <CardS>
         {characters.map(({id, name, species, gender, image, onClose})=>(
            <Card
               key={id}
               name={name}
               image={image}
               species={species}
               gender={gender}
               onClose={() => props.onClose(id)}
            /> 
         ))}
      </CardS>;
    </div>
   )
}

