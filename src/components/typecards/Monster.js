import React,{useContext} from 'react'
import level from '../../static/images/level/level.png';
import rank from '../../static/images/level/rank/rank.png';
import "../../static/css/Card.css";
import { HomeContext } from '../../context/HomeContext';
export const Monster = ({card}) => {
  const {importAll} = useContext(HomeContext);
  const attribute = importAll(require.context('../../static/images/atributes', false, /\.(png|jpe?g|svg)$/));
  const race = importAll(require.context('../../static/images/type/monster', true, /\.(png|jpe?g|svg||webp)$/));

  return (
    <>
     <h1>{card.name}</h1>
          <div className='level'>
            {card.level && <><p className=''>{card.level}</p> {card.type !== "XYZ Monster" ? <img className='detailcard imglevel'src={level} alt="level"/> : <img className='detailcard imgrank'src={rank} alt="level"/>}</>}
          </div>
          <img src={attribute[card.attribute + ".png"]} alt={card.attribute}/>
          <img src={race[card.race + ".webp"]} alt={card.race}/>
          <p>{card.race}</p>
          <p>{"ATK / " + card.atk} {(card.def >= 0) ? "DEF /" + card.def : (card.linkval && "LINK-" + card.linkval)}</p>
          <p>{card.desc}</p>
    </>
  )
}
export default Monster;