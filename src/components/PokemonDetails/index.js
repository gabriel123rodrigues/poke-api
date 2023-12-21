import React from 'react'
import Img from '../../assets/charizard.jpg';
import brackgroundImg from '../../assets/fogo.jpg'
import styled from 'styled-components';
export const PokemonDetails = () => {
  return (
    <Container>


      <DivImg>
        <ImgPokemon />
      </DivImg>
      <h1 style={{color:'white', zIndex:'5',marginTop:'75px',fontSize:'35px'}}>Charizard</h1>
      <DivInfo>
        <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <DivItem ><Item><span></span>Tipo</Item></DivItem>
          <DivItem><Item><span></span>Movimentos</Item></DivItem>
          <DivItem><Item><span></span>Habilidades</Item></DivItem>
        </ul>
      </DivInfo>

    </Container>
  )
}
export default PokemonDetails;

const DivItem = styled.div`
  background-color: #b81414;
  padding:5px;
  border-radius:5px;
`
const Item = styled.li`
  color: white;
  list-style: none;

`
const Container = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: black;
   height: 100vh;
   width: 100vw;
  
   
`
const DivImg = styled.div`
   background-image: url(${brackgroundImg});
   background-repeat: no-repeat;
   background-size: cover;
   display: flex;
   justify-content: center;
   width: 750px;
   height: 250px;
  position: relative;
  border-radius:0% 100% 45% 55% / 0% 0% 100% 100% ;
  border-bottom: 5px solid red;

`

const ImgPokemon = styled.img`
    background-image: url(${Img});
    width: 250px;
    height: 250px;
    border-radius:50%;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 2px 4px 0 white;
    position:absolute;
    margin-top: 60px;
    border: 1px solid white;

`
const DivInfo = styled.div`
    margin-top: 80px;
    border: 2px solid gold;
    border-radius: 15px;
    width: 850px;

`


