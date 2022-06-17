import React,{useContext, useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import "../static/css/ClickCard.css"
import { HomeContext } from '../context/HomeContext';
import OthersImg from './OthersImg';
import Not_found from "../static/images/other/Not-found.jpg"
import CardsRelated from './Cards/CardsRelated';
import Monster from './typecards/Monster';
import NoMonster from './typecards/NoMonster';
const ClickCard = () => {
    const {loading,cards,setFilter,filter} = useContext(HomeContext);
    // eslint-disable-next-line
    const name = useParams()
  
    const [url,setUrl] = useState(false)
    const [type,set] = useState(false)

    const card = cards.find(p => p.name === window.location.href.replaceAll(window.location.origin,"").replaceAll('%20',' ').replaceAll("%22",'"').slice(1))
   
    useEffect(() => {
     
    
      if(card){
        set(card.type === "Spell Card" || card.type === "Trap Card" ? <NoMonster card={card} one={false}/> :<Monster card={card} one={true}/>) 
      };
      
    }, [card])
    
    useEffect(()=>{
        if (card) if (card.archetype && (filter["archetype"] !== card.archetype || !filter["archetype"])){  
            let a = filter;
            a["archetype"] = card.archetype;
            setFilter({...a}) 
        }  
    // eslint-disable-next-line      
    },[card])
    
    if (loading) return (<div className="spinner-border text-primary" id='loadingHome' role="status"></div>);
  
    return <>
    {card ?  
        <div className='container'>
            <div className='Imgs'>
                <div className='name'>
                    <h1>{card.name}</h1>
                    {card.card_images.slice(1).length && <h1 className='othersart'>Others Arts</h1>} 
                    <hr className='line'/>
                </div>
                {card.card_images.slice(1).length && 
                    <div className='margin'>
                    
                </div>}
                <div className='principal'>
                    <img className='size2' src={!url ?card.card_images[0].image_url: url}  alt={card.name}/>
                    <div className='margin'>
                        {type}
                    </div>
                    <div className="othersimgs">
                        {card.card_images.slice(1).map((imagen)=>{
                                return <OthersImg key={imagen.id} img={imagen.image_url} setUrl={setUrl} />
                            })}
                    </div>
                </div>
                
            </div>
            
            {card.archetype && <CardsRelated  not={card}/>}
        </div>
        : 
        <div className='justify'>
            <h4>Oops! The card can't be found.</h4><p>If you think this page was shown in error, then please reload the page.</p>
            <p>It looks like nothing was found with this name. Try using other name </p>
            <img className='' src={Not_found} alt="card dont exist"/>
        </div>
        }
    </>
}

export default ClickCard
