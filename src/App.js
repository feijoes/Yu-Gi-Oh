/*eslint no-unused-vars: "off"*/
import React, {useState, useEffect} from 'react';
import './static/css/App.css';
import axios from "axios"
import Home from './components/Home';
import { HomeContext } from './context/HomeContext';
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
    <HomeContext.Provider value={{cards,loading} }>
    
      <Home />
    </HomeContext.Provider>
    </>
    )
}

export default App;
