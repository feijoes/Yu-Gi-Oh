import { createContext,useState,useEffect } from "react";
import axios from "axios"
import cardback from "../static/images/other/cardback.jfif"
export const HomeContext = createContext();

export function CardsContext ({children}){
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [img, setImg] = useState(cardback);

  const importAll = (r) => {
    let images = {};
    // eslint-disable-next-line
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
    useEffect(() =>{
      const fetchCards = async () => {
        const res = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php");
        setCards(res.data.data);

        setLoading(false)
        
      }
      fetchCards();
      },[])
      return(
      <HomeContext.Provider value={{cards,loading,img,setImg,cardback,importAll}}>
          {children}
      </HomeContext.Provider>)
}