import React from 'react'
import "../static/css/Card.css"
const Card = ({card, detail}) => {
    
  if (!detail) return <div className='card'><img className='imgcard'src={card.card_images[0].image_url} alt={card.name}/></div>
  return (
    <div className='slide'>
        <img className='detailcard'src={card.card_images[0].image_url} alt={card.name}/>
        <div className='hide'><h1>{card.name}</h1></div>
    </div>
  )
}
 
export default Card