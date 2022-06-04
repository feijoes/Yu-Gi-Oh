import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { HomeContext } from '../context/HomeContext';
import Monster from './typecards/Monster';
import NoMonster from './typecards/NoMonster';

const ClickCard = () => {
    const {loading,cards} = useContext(HomeContext);
    const {name} = useParams()
  
    if (loading) return (<div className="spinner-border text-primary" id='loadingHome' role="status"></div>);
    const card = cards.find(p => p.name === name)
    const type = card.type === "Spell Card" || card.type === "Trap Card" ? <NoMonster card={card} /> :<Monster card={card}/>;
    return <>
    {card &&  
        <div>
            <img className='' src={card.card_images[0].image_url}  alt={card.name}/>
            {type}
        </div>}
    </>
}

export default ClickCard