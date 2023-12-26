

import { PokemonDataProvider } from './context/PokemonDataContext';
import { Details } from './pages/Details';
import Home from './pages/Home'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
function App() {
  return (
    <PokemonDataProvider>
     {/* <Details/> */}
    <Home></Home>
    </PokemonDataProvider>
  )
   
}

export default App;
