 import { useEffect, useState } from "react";

 
 


export const PokemonService = (id) =>{

    const [pokemonData, setPokemonData] = useState(null);

   
console.log(pokemonData)
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
       .then((response)=>{
           return response.json();
       })
       .then((data)=>{
           setPokemonData(data);
       })
      
      
   },[]);
   
   return pokemonData
       
   
  
}




