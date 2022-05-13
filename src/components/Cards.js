import React from 'react'
import Card from './Card';
const Cards = ({cards,loading, n, detail}) => {
    
    if (loading) return (<div className="spinner-border text-primary" id='loadingHome' role="status"></div>);

    const ncards = cards.sort(() => Math.random() - Math.random()).slice(0, n)
  return (<><div className='cards'>
                {ncards && ncards.map((card)=>{
                    return <Card key={card.id}card={card} detail={detail} />
                })}
                {ncards.slice(0,30).map((card)=>{
                    return <Card key={card.id}card={card} detail={detail} />
                })}

            </div>
        </>)
}

export default Cards