import React from 'react'
import styled from 'styled-components'
import Img from '../../assets/fogo.jpg'
import pokemon from '../../assets/charizard.jpg'
import  useApi  from '../../services/useApi'


export const Cards = () => {

    const {data} = useApi(`https://pokeapi.co/api/v2/pokemon/0`);
     console.log(data);

    return (
        <DivContainer>
            <SectionNav>
                <ImgPokemon />
            </SectionNav>

            <DivNomePokeon>
               
                <h2>Charizard</h2>
            </DivNomePokeon>
        </DivContainer>
    )
}
export default Cards

const DivContainer = styled.div`
      
      height: 300px;
      width: 220px;
      box-shadow: 2px 4px 0 grey;
      border-radius: 20px;
      margin:20px;
      position: relative;
      border: 1px solid black;
      cursor: pointer;
    
`

const SectionNav = styled.header`
    background-image: url(${Img});
    background-size: cover;
    height: 150px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: relative;

`

const ImgPokemon = styled.div`
    margin-top: 80px;
    margin-left:33px;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background-color: black;
    position: absolute;
    z-index: 5;
    background-image: url(${pokemon});
    background-size: cover;
    border: 1px solid red;
`
const DivNomePokeon = styled.footer`
    margin-top: 100px;
    margin-left: 50px;
`


