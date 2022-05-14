/*eslint no-unused-vars: "off"*/
import React from 'react';
import './static/css/App.css';
import Home from './components/Home';
import { CardsContext } from './context/HomeContext';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";


const App = () => {
  return (
    <>
    <Router>
      <CardsContext>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Cards" element={<Home />} />
        </Routes>
      </CardsContext>
    </Router>
    </>
    )
}

export default App;
