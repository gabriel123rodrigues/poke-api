import React from 'react'
import styled from 'styled-components'
import Img from '../../assets/fogo.jpg'
import pokemon from '../../assets/charizard.jpg'
import { useState,useEffect } from "react";


export const Cards = ({pokemonId}) => {

    const [pokemonData,setPokemonData] = useState(null);

    useEffect(()=>{
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            
            setPokemonData(data);
            
        })
       
       
    },[pokemonId]);
    


   
     return (
        <DivContainer>
{pokemonData && (
            <SectionNav>
                <ImgPokemon><img src={pokemonData.sprites.front_default} style={{width:'100%'}}/></ImgPokemon>
            </SectionNav>
)
}
{pokemonData && (
            <DivNomePokeon>
                <h2>{pokemonData.name}</h2>
            </DivNomePokeon>
)}


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
    background-color: white;
    position: absolute;
    z-index: 5;
    /* background-image: url(${pokemon}); */
    background-size: cover;
    border: 1px solid red;
    display: flex;
    justify-content:center;
    align-items: center;
`
const DivNomePokeon = styled.footer`
   display: flex;
   margin-top: 80px;
   justify-content: center;
   align-items: center;
   
`


