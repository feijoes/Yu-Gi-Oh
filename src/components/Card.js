import React,{useState} from 'react';
import "../static/css/Card.css";
import { Link } from 'react-router-dom';
const Card = ({card, detail,setImg,setDetail,sethover,cardid,n}) => {

  const [load,setLoad] =useState(false)

  if (!detail) return <div className='card'><img className='imgcard'src={card.card_images[0].image_url} alt={card.name}/></div>
  
  return <>
    {!n ? 
    <Link to={'/'+ card.name} >
      <div style={!load ? {display:"none"}:{}} onMouseEnter={()=>sethover(true)}  onMouseOut={() =>sethover(false) } className='inline front' id={cardid}>
          <img className='detailcard imgcard'
          src={card.card_images[0].image_url} 
          alt={card.name} 
          onMouseOut={() => {setDetail({})}}
          onMouseEnter={() => {setImg(card.card_images[0].image_url);setDetail(card);}}
          onLoad={() => setLoad(true)}/>
      </div>
    </Link>
    :
    <Link to={'/'+ card.name} >
      <div className='inline front' id={cardid}  style={!load ? {display:"none"}:{}}>
          <img onLoad={() => setLoad(true)} className='detailcard imgcard'src={card.card_images[0].image_url} alt={card.name} />
      </div>
    </Link>
    
    }
  </>
}
 
export default Card