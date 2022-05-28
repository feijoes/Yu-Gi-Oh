import React from 'react';
import "../static/css/Card.css";


const Card = ({card, detail,setImg,setDetail,img,sethover}) => {
 
  if (!detail) return <div className='card'><img className='imgcard'src={card.card_images[0].image_url} alt={card.name}/></div>

  return (
    
    <div onMouseEnter={()=>sethover(true)}  onMouseOut={() =>sethover(false) } className='inline front' id='b'>
      
        <img className='detailcard imgcard'
        src={card.card_images[0].image_url} 
        alt={card.name} 
        onMouseOut={() => {setDetail({})}}
        onMouseEnter={() => {setImg(card.card_images[0].image_url);setDetail(card);}}/>
        
    </div>
  )
}
 
export default Card