import React from 'react'
import "../static/css/Button.css"
import { Link } from 'react-router-dom';
const Button = () => {
    return(   <div>
    <Link to="/Cards" className="animated-button1">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Cards
</Link></div>)
}
 
export default Button