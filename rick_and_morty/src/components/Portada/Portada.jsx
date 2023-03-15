import styled from "styled-components";

/* const Front = styled.img`
display: flex;
justify-content: flex-start;
height: 100px;
padding-bottom: 10px;
position: absolute;
top: 70px;
left: 20px;
z-index: auto;
` */
const LabelP = styled.img`
width: 100%;
height: auto;
margin-bottom: 5px;
padding: 0px;
`
const ContentP = styled.div`
display: flex;
width: 100%;
height: 300px;
max-width: 100%;
margin-bottom: 10px;
`
export default function Sleeve(){
    return(
        <ContentP>
            <LabelP src= 'https://cdn.shopify.com/s/files/1/0346/8063/5529/collections/rick-morty-collection-banner_1944x.jpg?v=1590095280' alt="label Portada" />
            {/* <Front className='portada' src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg' alt='Portada'/> */}
        </ContentP>
    )
}