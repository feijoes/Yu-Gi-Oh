import React, {useContext, useState} from 'react'

import "../static/css/AllCards.css"
import Decre from "../static/images/other/Decreased.png"
import Increase from "../static/images/other/Increse.png"
import Sort from './Sort'
import { HomeContext } from '../context/HomeContext';
const AllSort = () => {
  const {setReverse,reverse} = useContext(HomeContext);
  const values = ["atk","def","Level", "Name", "Type","New"]
  const[sort,setSort] = useState('')
  const changereverse =()=>{
    setReverse(reverse =>!reverse)
  }
  
  return (<>
    <div>
      <div className='filter2'>
        
           <h1>Sort by</h1>
           <hr className='line'/>
           <button className='sort'><img src={reverse?Increase:Decre} onClick={changereverse} alt="decre" /></button>
        
    </div> 
    </div>
    <div>
      {values.map((value)=>{
        
        return <Sort key={value} value={value} sort={sort} setSort={setSort}/>
      })}
    </div>
    </>
  )
}

export default AllSort