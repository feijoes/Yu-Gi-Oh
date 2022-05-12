/*eslint no-unused-vars: "off"*/
import React, {useState, useEffect} from 'react';
import './static/css/App.css';
import axios from "axios"
import Cards from './components/Cards';
import logo from "./static/images/logo.png"
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
    <div className='relative'>
      <div className='logo'>
        <img src={logo} className=" logoimg img-fluid" alt="logo" />
      </div>
      <Cards cards={cards} loading={loading} n="40" detail={false}/>
    </div>
    )

}

export default App;
