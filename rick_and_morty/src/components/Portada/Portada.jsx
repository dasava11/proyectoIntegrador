import styled from "styled-components";

const Front = styled.img`
display: flex;
justify-content: flex-start;
height: 120px;
padding-bottom: 10px;
position: absolute;
top: 20px;
left: 20px;
z-index: auto;
`
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
            <LabelP src= 'https://c4.wallpaperflare.com/wallpaper/1011/572/940/minimalism-the-moon-smith-cartoon-sanchez-hd-wallpaper-preview.jpg' alt="label Portada" />
            <Front className='portada' src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg' alt='Portada'/>
        </ContentP>
    )
}