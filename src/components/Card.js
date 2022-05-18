import React from 'react';
import "../static/css/Card.css";


const Card = ({card, detail,setImg,setDetail,img}) => {
 
  if (!detail) return <div className='card'><img className='imgcard'src={card.card_images[0].image_url} alt={card.name}/></div>
  
  return (
    <div className='inline front'>
        <img className='detailcard imgcard'
        src={card.card_images[0].image_url} 
        alt={card.name} 
        onMouseOut={() => {setImg(img); setDetail({})}}
        onMouseEnter={() => {setImg(card.card_images[0].image_url);setDetail(card);}}/>
        
    </div>
  )
}
 
export default Card