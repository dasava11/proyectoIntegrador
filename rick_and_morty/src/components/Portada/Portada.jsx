import styled from "styled-components";

const Front = styled.img`
display: flex;
justify-content: flex-start;
height: 150px;
padding-bottom: 10px;
/* position: absolute; */
top: 20px;
left: 20px;
z-index: auto;
`
const LabelP = styled.img`
width: 100%;
margin-bottom: 5px;
padding: 0px;
/* clip-path: polygon(0 0, 100% 0, 100% 30%, 30% 30%, 0 30%); */
`
const ContentP = styled.div`
display: flex;
width: 100%;
height: 100%;
max-width: 100%;
background-color: black;
margin-bottom: 10px;
/* clip-path: polygon(0 0, 100% 0, 100% 30%, 30% 30%, 0 30%); */
`
export default function Sleeve(){
    return(
        <ContentP>
            {/* <LabelP src="" alt="label Portada" /> */}
            <Front className='portada' src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg' alt='Portada'/>
        </ContentP>
    )
}