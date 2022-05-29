import React from 'react'
import cardback from "../static/images/other/cardback.jfif"
import "../static/css/Card.css"
import ReactCardFlip from 'react-card-flip';
const Cardback = ({img,hover}) => {
  return(
  <ReactCardFlip isFlipped={hover} flipDirection="horizontal">
    <div className='size'>
      <img  className="detailImg"src={cardback} alt="cardback"/>
    </div>

    <div className='size'>
      <img  className="detailImg"src={img} alt="cardback"/>
    </div>
  </ReactCardFlip>
 
)}

export default Cardback