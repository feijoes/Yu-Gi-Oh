import React, { useState , useMemo } from 'react'
import Card from './Card';
import Cardback from './Cardback';
import cardback from "../static/images/other/cardback.jfif"

const Cards = ({cards,loading, n, detail}) => {
    const [img, setImg] = useState(cardback);
    const ncards = cards.sort(() => Math.random() - Math.random()).slice(0, n);
    // eslint-disable-next-line react-hooks/exhaustive-deps  
    const memocards = useMemo(()=> ncards,[])

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
            <Cardback img={img}/>
            </>
}

export default Cards