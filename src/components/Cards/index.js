import React from 'react'
import styled from 'styled-components'
import fogo from '../../assets/fogo.jpg'
import grama from '../../assets/grama.jpg'
import eletrico from '../../assets/eletrico.jpg'
import pokemon from '../../assets/charizard.jpg'
import dark from '../../assets/dark.jpg'
import fly from '../../assets/flying.jpg'
import agua from '../../assets/agua.jpg'
import normal from '../../assets/normal.jpg'
import { useState,useEffect } from "react";


export const Cards = ({}) => {

    const [background,setBackground] = useState ('');
    const [pokemonData,setPokemonData] = useState(null);
    function numero (){
        let numeroAleatorio = Math.floor(Math.random() * 1017);
        return numeroAleatorio; 
    }

    useEffect(()=>{
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${numero()}`)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            setPokemonData(data);
        })
       
       
    },[]);

    const mudarBackground = () =>{
        if (pokemonData && pokemonData.types){
            pokemonData.types.forEach((type)=>{
            if(type.type.name === 'grass' || type.type.name === 'ground' ) return setBackground(`url(${grama})`);
            if(type.type.name === 'fire') return setBackground(`url(${fogo})`);
            if(type.type.name === 'water') return setBackground(`url(${agua})`);
            if(type.type.name === 'electric') return setBackground(`url(${eletrico})`);
            if(type.type.name === 'dark') return setBackground(`url(${dark})`);
            if(type.type.name === 'normal') return setBackground(`url(${normal})`);
            if(type.type.name === 'flying') return setBackground(`url(${fly})`);
        })
        
        }
    }
   useEffect(()=>{
    mudarBackground();
   },[pokemonData]);

   
     return (
        <DivContainer>
{pokemonData && (
            <SectionNav style={{backgroundImage: background}}>
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


