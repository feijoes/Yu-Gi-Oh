import React from 'react'
import Filter from './Filter'

const AllFilters = ({list,set,filter}) => {
 
  return(<div className=''>
  {list.values.map((key)=>{
    return <Filter key={key} atribute={list.atribute} value={key} set={set} filter={filter}/>
  })}
</div>)
}

export default AllFilters