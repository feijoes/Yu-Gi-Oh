import React,{useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "../static/css/ClickCard.css"
import { HomeContext } from '../context/HomeContext';

const ClickCard = () => {
    const {loading,cards} = useContext(HomeContext);
    const {name} = useParams()
    const card = cards.find(p => p.name === name)
    useEffect(() => {
        if (card) test()
    }, [card])
    const test = ()=>{
        console.log(card.card_images)
    }
    
    
    if (loading) return (<div className="spinner-border text-primary" id='loadingHome' role="status"></div>);
    
    
    return <>
    {card &&  
        <div className='container'>
            <div className='center2 '>
                <img className='size' src={card.card_images[0].image_url}  alt={card.name}/>
                
            </div>
            <h1>{card.name}</h1>
        </div>}
    </>
}

export default ClickCard