import React from 'react';
import './App.css';
import Home from '../Pages/Home';
import Sobre from '../Pages/Sobre';
import Projetos from '../Pages/Projetos';
import Habilidades from '../Pages/Habilidades';
import Contato from '../Pages/Contato';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
 <Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/sobre' element={<Sobre/>}/>
    <Route path='/projetos' element={<Projetos/>}/>
    <Route path='/habilidades' element={<Habilidades/>}/>
    <Route path='/contato' element={<Contato/>}/>
  </Routes>
 </Router>
  );
}

export default App;
