import React from 'react'
import level from '../../static/images/level/level.png';
import rank from '../../static/images/level/rank/rank.png';
import "../../static/css/Card.css";
export const Monster = ({card}) => {
  return (
    <>
    <img className='detailimg'src={card.card_images[0].image_url} alt={card.name}/>
     <h1>{card.name}</h1>
          <div className='level'>
            {card.level && <><p className=''>{card.level}</p> {card.type !== "XYZ Monster" ? <img className='detailcard imglevel'src={level} alt="level"/> : <img className='detailcard imgrank'src={rank} alt="level"/>}</>}
          </div>
          <p>{"ATK / " + card.atk} {(card.def >= 0) ? "DEF /" + card.def : (card.linkval && "LINK-" + card.linkval)}</p>
          <p>{card.desc}</p>
    </>
  )
}
export default Monster;