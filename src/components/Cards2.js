import React, {useContext,useEffect,useState}  from 'react'
import Card from './Card';
import "../static/css/AllCards.css"
import { HomeContext } from '../context/HomeContext';
const Cards2 = ({n}) => {
    const {loading,cards,filter,reverse} = useContext(HomeContext);
    const [ncards,setNcards] = useState([])
    
    const [realcards,setRealcards] = useState(ncards)
    const load = <div className="spinner-border text-primary" id='loadingHome' role="status"></div>
    
    useEffect(()=>{
        "sort" in filter?setNcards(cards.filter(obj => obj.type !== 'Skill Card' && obj.type !== 'Token' )):setNcards(cards.sort(() => Math.random() - Math.random()).filter(obj => obj.type !== 'Skill Card' && obj.type !== 'Token' ))
    },[cards,filter])
    useEffect(()=>{
        setRealcards(ncards.reverse().slice(0,n));
    },[n,ncards,reverse])
   
    
    
    if (loading) return (load);
    
        return (<><div className='cards '>
                {realcards.map((card)=>{
                    return (
                        <Card key={card.id}card={card} detail={false} />)
                })}
                {realcards.slice(0,25).map((card)=>{return <Card key={card.id}card={card} detail={false} /> })}
            </div>
        </>)
        }
export default Cards2