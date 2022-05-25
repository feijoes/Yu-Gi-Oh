import React from 'react'
import cardback from "../static/images/other/cardback.jfif"
import "../static/css/Card.css"
import { CSSTransition  } from 'react-transition-group';

const duration = 300;

const Cardback = ({img}) => {


  return (<>
  <CSSTransition  in={img === cardback} timeout={duration} classNames="flipcard">
    
  <div className="card-container">  
<div className="card-vertical">
  <div className="card-front">
    <article className="card-front-content">
    <img  className="detailImg2"src={cardback} alt="cardback"/>
     </article>
  </div>
  <div className="card-back">
   <article className="card-back-content">
    <img  className="detailImg"src={img} alt="cardback"/>
     </article>
  </div>
</div>
</div>
  
  </CSSTransition >
  </>
  )
}


export default Cardback