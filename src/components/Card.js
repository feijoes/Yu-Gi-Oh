import React from 'react';
import "../static/css/Card.css";
import level from '../static/images/level/level2.jpg';
const Card = ({card, detail}) => {
    
  if (!detail) return <div className='card'><img className='imgcard'src={card.card_images[0].image_url} alt={card.name}/></div>
  console.log(card)
  return (
    <div >
        <img className='detailcard imgcard'src={card.card_images[0].image_url} alt={card.name}/>
        <div className='hide'>
          <h1>{card.name}</h1>
          <img className='detailcard imglevel'src={level} alt="level"/>
          <p>{card.atk} {card.def}</p>
          <p>{card.desc}</p>
        </div>
    </div>
  )
}
 
export default Card