import React,{useContext} from 'react'
import level from '../../static/images/level/level.png';
import rank from '../../static/images/level/rank/rank.png';
import "../../static/css/Card.css";
import { HomeContext } from '../../context/HomeContext';
export const Monster = ({card}) => {
  const {importAll} = useContext(HomeContext);

  const attribute = importAll(require.context('../../static/images/atributes', false, /\.(png|jpe?g|svg)$/));
  const race = importAll(require.context('../../static/images/type/monster', true, /\.(png|jpe?g|svg||webp)$/));
  const descStyle = card.desc.length <= 324? "text" : card.desc.length <= 689? "smalltext" : card.desc.length <= 860  ?"moresmalltext" : card.desc.length <= 950? "supersmalltext" :"megasmalltext"

  return (
    <>
     <h1  className='responsive'>{card.name}</h1>
          <div className='level'>
            <div className='flex'>
              <div className='flex'>
              {card.level && <><p className='block'>{card.level}</p> {card.type !== "XYZ Monster" ? <img className='imglevel'src={level} alt="level"/> : <img className='imgrank'src={rank} alt="level"/>}</>}
              <img src={race[card.race + ".webp"]} className='race' alt={card.race}/>
             </div>
             {card.scale && <div className='flex scale'>
              <img src="https://www.masterduelmeta.com/_app/assets/scale-ab9833fd.webp" className='race' alt={"Scale"}/>
              <p className='scalenumber'>{card.scale}</p>
                            </div>}
            </div>
            {}
            <div className='flex attribute'>
              <p className='nameatribute'>{card.attribute}</p>
              <img src={attribute[card.attribute + ".png"]} className="" alt={card.attribute}/>
            </div>
          </div>
          
       
          <p> [ {card.race}{card.type !== "Normal Monster"? card.type.split(" ").map((type)=>{return type !== "Normal" && type !== "Monster" ? " / "+ type : null }): null}  {!card.type.includes("Effect") && !card.type.includes("Normal") &&" / Effect"} ]</p>
          <p className='closer'>{"ATK / " + card.atk} {(card.def >= 0) ? "DEF /" + card.def : (card.linkval && "LINK-" + card.linkval)}</p>
          <p className={descStyle + " closer"}>{card.desc.replace("-".repeat(40),"\n")}</p>
    </>
  )
}
export default Monster;