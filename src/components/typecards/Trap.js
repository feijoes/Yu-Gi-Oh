import React,{useContext} from 'react'
import "../../static/css/Card.css";
import { HomeContext } from '../../context/HomeContext';
import  atributo from '../../static/images/atributes/Trap.png';
const Trap = ({card}) => {
  const {importAll} = useContext(HomeContext);
  const type = importAll(require.context('../../static/images/type/trap', true, /\.(png|jpe?g|svg||webp)$/));
console.log(card)
  return ( 
    <>
      <h1>{card.name}</h1>
      <div>
        <img src={atributo} className='atripute' alt={atributo} />
        <img src={type[card.race + ".webp"]} alt={card.race}/>
        </div>
        <div>
        <p>{card.desc}</p>
        </div>
    </>
    
  )
}

export default Trap