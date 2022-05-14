import React from 'react';
import "../static/css/Card.css";
import level from '../static/images/level/level.jpeg';
const Card = ({card, detail}) => {
    
  if (!detail) return <div className='card'><img className='imgcard'src={card.card_images[0].image_url} alt={card.name}/></div>
  console.log(card)
  return (
    <div>
        <img className='detailcard imgcard'src={card.card_images[0].image_url} alt={card.name}/>
        <div className='hide'>
          <h1>{card.name}</h1>
          <div className='level'>
            {card.level && <><p className=''>{card.level}</p><img className='detailcard imglevel'src={level} alt="level"/></>}
          </div>
          <p>{card.atk} {card.def}</p>
          <p>{card.desc}</p>
        </div>
    </div>
  )
}
 
export default Card