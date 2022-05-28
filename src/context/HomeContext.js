import { createContext,useState,useEffect } from "react";
import axios from "axios"
import cardback from "../static/images/other/cardback.jfif"
export const HomeContext = createContext();

export function CardsContext ({children}){
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [img, setImg] = useState(cardback);
  const  [detailCard, setDetail] = useState({})
  const [filter,setFilter] = useState({})


  const importAll = (r) => {
    let images = {};
    // eslint-disable-next-line
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
    useEffect(() =>{
      const link =  Object.keys(filter).length ? "https://db.ygoprodeck.com/api/v7/cardinfo.php?" + new URLSearchParams(filter).toString() : "https://db.ygoprodeck.com/api/v7/cardinfo.php"

      const fetchCards = async () => {
        const res = await axios.get(link);
        setCards(res.data.data);

        setLoading(false)
       
      }
      fetchCards();
      },[filter])
      return(
      <HomeContext.Provider value={{cards,loading,img,setImg,cardback,importAll,setDetail,detailCard,setFilter,filter}}>
          {children}
      </HomeContext.Provider>)
}