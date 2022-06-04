import React, {useState,useContext} from 'react'
import "../static/css/sort.css"
import Decre from "../static/images/other/Decreased.png"
import Increase from "../static/images/other/Increse.png"
import { HomeContext } from '../context/HomeContext';
const Sort = () => {
  const {setFilter,filter,setReverse,reverse} = useContext(HomeContext);
  const [Isclick, setCLick] = useState(false)
  const values = ["atk","def","Level", "Name", "Type","New"]
  const changereverse =()=>{
    setReverse(reverse =>!reverse)
  }
  const click = (value) =>{
    setCLick(!Isclick);
    let a = filter
    a["sort"] = value
    setFilter(b=>({...b,...a}))
  }
  return (<>
    <div>
      <button className='sort'><img src={reverse?Increase:Decre} onClick={changereverse} alt="decre" /></button>
    </div>
    <div>
      {values.map((value)=>{
        return <button  key={value} onClick={()=> click(value)}>{value}</button>
      })}
    </div>
    </>
  )
}

export default Sort