import React, {useContext} from 'react'
import Monster from './typecards/Monster';
import NoMonster from './typecards/NoMonster';


import Cardback from './Cardback';
import { HomeContext } from '../context/HomeContext';
const CardDetail = ({card,hover}) => {
const type = card.type === "Spell Card" || card.type === "Trap Card" ? <NoMonster card={card} /> :<Monster card={card}/> ;
const {img} = useContext(HomeContext);

  return (<>
      <Cardback img={img} hover={hover}/>
        <div className=''>
          {Object.keys(type.props["card"]).length !== 0? type : null}
        </div>
        </>
  )
}

export default CardDetail