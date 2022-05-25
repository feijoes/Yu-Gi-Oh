import React, {useState} from 'react'
import "../static/css/filter.css"
const Filter = ({atribute, value ,set,filter}) => {
  console.log(atribute)
  const [Isclick, setCLick] = useState(false)
  
  const click = () =>{
    setCLick(!Isclick);
    const a = {}
    if (!Isclick){
      if(!filter[atribute]){
          a[atribute] = [value]
      } else {
        filter[atribute].push(value);
        a[atribute] = filter[atribute];
      }
      set(oldArray => ({...oldArray,...a}))
  }
    else{set(oldArray => oldArray.filter((item)=>{return item !== value}))}
   
  }
  return (
    <div>
      <button className={Isclick ? "button-on": "button-off"} onClick={click}>{value}</button>
    </div>
  )
}

export default Filter