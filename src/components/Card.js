import React from 'react';
import "../static/css/Card.css";
import level from '../static/images/level/level.png';
import rank from '../static/images/level/rank/rank.png';
const Card = ({card, detail}) => {
    
  if (!detail) return <div className='card'><img className='imgcard'src={card.card_images[0].image_url} alt={card.name}/></div>
  console.log(card)

  return (
    <div className='inline'>
        <img className='detailcard imgcard'src={card.card_images[0].image_url} alt={card.name}/>
        <div className='hide'>
          <h1>{card.name}</h1>
          <div className='level'>
            {card.level && <><p className=''>{card.level}</p> {card.type !== "XYZ Monster" ? <img className='detailcard imglevel'src={level} alt="level"/> : <img className='detailcard imgrank'src={rank} alt="level"/>}</>}
            
          </div>
          <p>{(card.atk !== undefined) ? "ATK / " + card.atk : card.atk} {(card.def >= 0) ? "DEF /" + card.def : (card.linkval && "LINK-" + card.linkval)}</p>
          <p>{card.desc}</p>
        </div>
    </div>
  )
}
 
export default Card