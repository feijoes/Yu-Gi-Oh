import React,{useContext} from 'react'
import "../../static/css/Card.css";
import { HomeContext } from '../../context/HomeContext';
import spelllogo from "../../static/images/atributes/SPELL.png"
const Spell = ({card}) => {
  const {importAll} = useContext(HomeContext)

  const race = importAll(require.context('../../static/images/type/spell', true, /\.(png|jpe?g|svg||webp)$/));

  return (
    <>
    <h1>{card.name}</h1>
    <img src={spelllogo} alt={"spell card"}/>
         <img src={race[card.race + ".webp"]} alt={card.race}/>
         <p>{card.race}</p>
         <p>{card.desc}</p>
   </>
  )
}

export default Spell