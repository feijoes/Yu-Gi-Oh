import React, {useState} from 'react'
import "../../static/css/filter.css"
const Filter = ({atribute, value ,set,filter}) => {

  const [Isclick, setCLick] = useState(false)
  const click = () =>{
    setCLick(!Isclick);
    let a = {}
    if (!Isclick){
      if(!filter[atribute]){
          a[atribute] = [value]
      } else {
        filter[atribute].push(value);
        a[atribute] = filter[atribute];
      }
      set(b => ({...b,...a}))
  }
    else{
      a = filter
      a[atribute] = a[atribute].filter(item => {return item !== value});
      if (a[atribute].length === 0 ) {delete a[atribute]} 
      set({...a})
      }}
  return <button className={Isclick ? "button-on": "button-off"} onClick={click}>{value}</button>
  
}

export default Filter