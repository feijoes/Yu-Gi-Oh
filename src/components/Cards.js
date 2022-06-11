import React, {useContext,useEffect,useState,useLayoutEffect}  from 'react'
import Card from './Card';
import "../static/css/AllCards.css"
import { HomeContext } from '../context/HomeContext';
const Cards = ({sethover,n,setN }) => {
    const {setImg,loading, cardback,cards,setDetail,filter,reverse} = useContext(HomeContext);
    const [ncards,setNcards] = useState([])
    const [realcards,setRealcards] = useState(ncards)
    const load = <div className="spinner-border text-primary" id='loadingHome' role="status"></div>
  
    useLayoutEffect(()=>{
        
        if ((localStorage.getItem('cards') === [] || localStorage.getItem('cards') === null) || filter !== {})  localStorage.setItem("cards",JSON.stringify([...cards].sort(() => Math.random() - Math.random()).filter(obj => obj.type !== 'Skill Card' && obj.type !== 'Token' ).slice(0,1000)))
    },[cards,filter])
    useLayoutEffect(()=>{
        "sort" in filter?setNcards(cards.filter(obj => obj.type !== 'Skill Card' && obj.type !== 'Token' )):console.log(JSON.parse(localStorage.getItem("cards"))[0]);setNcards(JSON.parse(localStorage.getItem("cards")))
    }, // eslint-disable-next-line 
    [filter,cards])
    
    useEffect((p)=>{
     
        setRealcards(!reverse ?ncards.slice(0,n):ncards.reverse().slice(0,n));
    },[n,ncards,reverse])
    
    const loadmore = ()=>{
        
        setN(n=>n+10)
    }
    const nextCard = (e)=>{
        
        if(e.target.clientHeight + e.target.scrollTop >= (e.target.scrollHeight -2 )){
           loadmore()
           
           
        }
    }
   
    useEffect(()=>{       
        
        const scrollcard = document.getElementById('scrollcard')
        scrollcard.addEventListener('scroll',(e)=>{nextCard(e)});
        
    }, // eslint-disable-next-line 
    [])
    
    
    
    if (loading) return (load);
    return(
        <>{realcards.map((card)=>{
                return <Card key={card.id}  cardid={card.id}card={card} detail={true} setImg={setImg} setDetail={setDetail} img={cardback} sethover={sethover}/>
            })}
</>
    )}
export default Cards