import React from 'react';
import "../static/css/Card.css";
import Monster from './typecards/Monster';
import Spell from './typecards/Spell';
import Trap from './typecards/Trap';
const Card = ({card, detail}) => {
    
  if (!detail) return <div className='card'><img className='imgcard'src={card.card_images[0].image_url} alt={card.name}/></div>
  console.log(card)
  const type = card.type === "Spell Card"? <Spell card={card} /> : card.type === "Trap Card" ? <Trap card={card} /> :<Monster card={card}/> ;
  return (
    <div className='inline'>
        <img className='detailcard imgcard'src={card.card_images[0].image_url} alt={card.name}/>
        <div className='hide'>
          {type}
        </div>
    </div>
  )
}
 
export default Card