import React from "react";
import styled from "styled-components";
import Cards from "../Cards";
import img from '../../assets/Background-Pokemon.webp'
import { useState } from "react";


const Painel = () => {

    const [newPokemon, setNewPokemon] = useState([0,1,2]);
    console.log(newPokemon);
   
    const generatePokemon = () =>{
        console.log('cliquei');
        let addPokemon = 3
        let updatePokemon = [];
        for(let i=0; i<3 ; i++){
            updatePokemon.push(addPokemon);
            addPokemon ++;
        }
        setNewPokemon([...newPokemon,...updatePokemon]);
    }
   

    return (

        
        <>
            <Div>
                <Section>
                    {newPokemon.map((pokemon, index)=><Cards key={index} />)}
                   
                    
                </Section>
                <Footer>
                    <Button onClick={generatePokemon}>Mais Pokemons</Button>
                </Footer>

            </Div>

        </>
    )
}

export default Painel;

const Div = styled.div`
     
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url(${img}) ;
    background-size: cover;
    height: 100vh;
`
const Button = styled.button`
   

`


const Section = styled.section`
    height: 550px;
    width: 60vw;
    display:flex;
    flex-wrap: wrap;
    border:2px solid purple;
    border-radius: 15px;
    background-color: #f5fffb;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 5px;

    }
    &::-webkit-scrollbar-thumb{
        background-color: black;
        border-radius: 20px;
        
    }
`
const Footer =styled.section`
    margin-top: 15px;
    display: flex;
    justify-content: center;
`