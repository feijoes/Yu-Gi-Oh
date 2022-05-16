import React, {useMemo,useContext}  from 'react'
import Card from './Card';

import { HomeContext } from '../context/HomeContext';
const Cards = ({n ,detail}) => {
    const {setImg,loading, cardback,cards} = useContext(HomeContext);
    const ncards = cards.sort(() => Math.random() - Math.random()).slice(0, n);
    // eslint-disable-next-line react-hooks/exhaustive-deps  
    const memocards = useMemo(()=> ncards,[cards]);
    if (loading) return (<div className="spinner-border text-primary" id='loadingHome' role="status"></div>);
   
    
    
    if (!detail){
        return (<><div className='cards'>
                {memocards.map((card)=>{
                    return <Card key={card.id}card={card} detail={detail} />
                })}
                {!detail && memocards.slice(0,25).map((card)=>{return <Card key={card.id}card={card} detail={detail} /> })}

            </div>
        </>)}
        

    return <>{memocards.map((card)=>{
                return <Card key={card.id}card={card} detail={detail} set={setImg} img={cardback}/>
            })}
            
            </>
}

export default Cards