import React,{useContext} from 'react'
import "../../static/css/Card.css";
import { HomeContext } from '../../context/HomeContext';
import Spell from '../../static/images/atributes/SPELL.png';
import Trap from "../../static/images/atributes/SPELL.png"

export const NoMonster = ({card,one}) => {
  const {importAll} = useContext(HomeContext);
  const race = importAll(require.context('../../static/images/type/nomonster', true, /\.(png|jpe?g|svg||webp)$/));
  const descStyle = card.desc.length <= 324? "text" : card.desc.length <= 689? "smalltext" : card.desc.length <= 860  ?"moresmalltext" : card.desc.length <= 950? "supersmalltext" :"megasmalltext"
  const banlist_info = importAll(require.context('../../static/images/banlist', true, /\.(png|jpe?g|svg||webp)$/));
  if(!one){
  return (
    <>
    {card.banlist_info?.ban_tcg && <img className="banlist"src={banlist_info[card.banlist_info.ban_tcg + ".svg"]} alt={card.banlist_info.ban_tcg}></img>}
     <h1  className='responsive'>{card.name}</h1>
          <div className='level'>
            <div className='flex'>
                <p>{card.race} </p>
                <img src={race[card.race + ".webp"]} className='nomonsterimg' alt={card.race}/>
            </div>
            <div className='flex attribute'>
                <p className='type'>{card.type}</p>
                <img src={card.type === "Trap Card" ?Trap : Spell} className="nomonsterimg" id="atributeSpellTrap" alt={card.attribute}/>
            </div>
          </div>
          <p className={descStyle + " closer"}>{card.desc.replace("-".repeat(40),"\n")}</p>
    </>
  )}
  return (
    <div className='letra'>
    {card.banlist_info?.ban_tcg && <img className="banlist"src={banlist_info[card.banlist_info.ban_tcg + ".svg"]} alt={card.banlist_info.ban_tcg}></img>}
     
          <div className='level'>
            <div className='flex'>
                <p>{card.race} </p>
                <img src={race[card.race + ".webp"]} className='nomonsterimg' alt={card.race}/>
            </div>
            <div className='flex attribute'>
                <p className='type'>{card.type}</p>
                <img src={card.type === "Trap Card" ?Trap : Spell} className="nomonsterimg" id="atributeSpellTrap" alt={card.attribute}/>
            </div>
          </div>
          <p className={descStyle + " closer"}>{card.desc.replace("-".repeat(40),"\n")}</p>
    </div>
  )
}
export default NoMonster;