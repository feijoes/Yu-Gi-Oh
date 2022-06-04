import React from 'react';
import "../static/css/Card.css";
import { Link } from 'react-router-dom';
const Card = ({card, detail,setImg,setDetail,sethover}) => {
  if (!detail) return <div className='card'><img className='imgcard'src={card.card_images[0].image_url} alt={card.name}/></div>

  return (
    <Link to={'/'+ card.name} >
      <div onMouseEnter={()=>sethover(true)}  onMouseOut={() =>sethover(false) } className='inline front' id='b'>
          <img className='detailcard imgcard'
          src={card.card_images[0].image_url} 
          alt={card.name} 
          onMouseOut={() => {setDetail({})}}
          onMouseEnter={() => {setImg(card.card_images[0].image_url);setDetail(card);}}/>
      </div>
    </Link>
  )
}
 
export default Card