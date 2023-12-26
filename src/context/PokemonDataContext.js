import { createContext, useState, useEffect } from "react";
import {PokemonService} from '../../src/services/PokemonService'


export const PokemonDataContext = createContext();



export const PokemonDataProvider = ({ children }) => {
   
   const pokemonData = PokemonService();

    return <PokemonDataContext.Provider value={{ pokemonData }}>{children}</PokemonDataContext.Provider>
}