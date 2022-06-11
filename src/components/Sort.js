import React, {useContext} from 'react'
import "../static/css/sort.css"
import { HomeContext } from '../context/HomeContext';

const Sort = ({value,sort,setSort}) => {
  const {setFilter,filter} = useContext(HomeContext);
  const click = () =>{
    
    let a= filter
    a["sort"] = value
    setFilter(({...a}))
    setSort(value)
  }
    return <button className={sort===value ? "button-on": "button-off"} onClick={click}>{value}</button>

  
}

export default Sort