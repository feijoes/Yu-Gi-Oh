import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { HomeContext } from '../context/HomeContext';


const ClickCard = () => {
    const {loading,cards,setFilter,filter} = useContext(HomeContext);
    const {name} = useParams()
    const card = cards.find(p => p.name === name)
  
    if (card.archetype && !filter["archetype"]){  
        let a = filter;
        a["archetype"] = card.archetype;
        setFilter({...a}) 
    }
    
    if (loading) return (<div className="spinner-border text-primary" id='loadingHome' role="status"></div>);

    
    return <>
    {card &&  
        <div>
            <img className='' src={card.card_images[0].image_url}  alt={card.name}/>
        </div>}
    </>
}

export default ClickCard