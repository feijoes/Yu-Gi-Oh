import { createContext,useState,useEffect} from "react";
import axios from "axios"

export const HomeContext = createContext();

export function CardsContext ({children}){
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  
    useEffect(() =>{
      const fetchCards = async () => {
        const res = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php");
        setCards(res.data.data);
        setLoading(false)
        
      }
      fetchCards();
      },[])
      return(
      <HomeContext.Provider value={{cards,loading}}>
          {children}
      </HomeContext.Provider>)
}