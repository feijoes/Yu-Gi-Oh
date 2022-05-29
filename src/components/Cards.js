import React, {useContext,useEffect,useState}  from 'react'
import Card from './Card';
import { HomeContext } from '../context/HomeContext';
const Cards = ({sethover,n ,detail}) => {
    const {setImg,loading, cardback,cards,setDetail,filter,reverse} = useContext(HomeContext);
    const [ncards,setNcards] = useState([])
    
    const [realcards,setRealcards] = useState(ncards)
    
    useEffect(()=>{
        "sort" in filter?setNcards(cards.filter(obj => obj.type !== 'Skill Card' && obj.type !== 'Token' )):setNcards(cards.sort(() => Math.random() - Math.random()).filter(obj => obj.type !== 'Skill Card' && obj.type !== 'Token' ))
    },[cards,filter])
    useEffect(()=>{
        setRealcards(ncards.reverse().slice(0,n));
    },[n,ncards,reverse])
    if (loading) return (<div className="spinner-border text-primary" id='loadingHome' role="status"></div>);

    if (!detail){
        return (<><div className='cards '>
                {realcards.map((card)=>{
                    return (
                        <Card key={card.id}card={card} detail={detail} />)
                })}
                {realcards.slice(0,25).map((card)=>{return <Card key={card.id}card={card} detail={detail} /> })}
            </div>
        </>)}
        
    return <>{realcards.map((card)=>{
                return <Card key={card.id}card={card} detail={detail} setImg={setImg} setDetail={setDetail} img={cardback} sethover={sethover}/>
            })}
            </>
}

export default Cards