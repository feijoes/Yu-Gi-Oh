import React,{useContext} from 'react'
import { HomeContext } from '../../context/HomeContext';
import Card from "../Card"
const CardsRelated = ({not}) => {
  const {cards} = useContext(HomeContext);
  return <>
    {cards && cards.slice(1,10).map((card)=>{
      if(card !== not) 
        return<Card key={card.id} cardid={card.id}card={card} detail={true} n="1"/>
      return null})}
  </>
}

export default CardsRelated