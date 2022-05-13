/*eslint no-unused-vars: "off"*/
import React, {useState, useEffect} from 'react';
import './static/css/App.css';
import axios from "axios"
import Home from './components/Home';
import { HomeContext } from './context/HomeContext';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
const App = () => {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  
    useEffect(() =>{
      const fetchCards = async () => {
        setLoading(true);
        const res = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php");
        setCards(res.data.data);
        setLoading(false)
        
      }
      fetchCards();
      },[])
  return (
    <>
    <Router>
      <HomeContext.Provider value={{cards,loading} }>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </HomeContext.Provider>
    </Router>
    </>
    )
}

export default App;
