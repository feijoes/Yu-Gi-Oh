/*eslint no-unused-vars: "off"*/
import React from 'react';
import './static/css/App.css';
import Home from './components/Home';
import AllCards from './components/AllCards';
import { CardsContext } from './context/HomeContext';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import ClickCard from './components/ClickCard';

const App = () => {

  return (
    <>
    <Router>
      <CardsContext>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Cards" element={<AllCards />} />
          <Route path="/:name" element={<ClickCard />}/>
        </Routes>
      </CardsContext>
    </Router>
    </>
    )
}

export default App;
