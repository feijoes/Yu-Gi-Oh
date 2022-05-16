import React from 'react'
import cardback from "../static/images/other/cardback.jfif"
import "../static/css/Card.css"
import { CSSTransition  } from 'react-transition-group';

const duration = 300;

const Cardback = ({img}) => {
  

  return (<>
  <CSSTransition  in={img === cardback} timeout={duration} classNames="flipcard">
    <div>
      <img  className="detrailcard"src={img} alt="cardback"/>
    </div>
  </CSSTransition >
  </>
  )
}

export default Cardback