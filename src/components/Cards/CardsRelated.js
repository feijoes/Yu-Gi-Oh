import React,{useContext,useState} from 'react'
import { HomeContext } from '../../context/HomeContext';
import Card from "../Card"
const CardsRelated = ({not}) => {
  const {cards} = useContext(HomeContext);
  const [allload,setNumber] = useState(0)
  
  return <>
    {cards && <div className={!allload===cards.slice(0,12).length?"spinner-border text-primary":null} id={!allload===cards.slice(0,12).length? "loadingHome":null} role={!allload===cards.slice(0,12).length? "status":null}>
      {cards.slice(0,30).map((card)=>{
        if (card !== not) 
          return<Card key={card.id} setNumber={setNumber}cardid={card.id}card={card} detail={true} n="1"/>
        return null 
    }
      )}
      </div>
   
    }
  </>
}

export default CardsRelated