import React from 'react'
import "../static/css/OthersImg.css"
const OthersImg = ({img,setUrl}) => {

    const style = {
        "backgroundImage": `url(${img})`}
  return (
    <div className='otherimg'  onMouseEnter={()=>setUrl(img)}  onMouseLeave={()=>setUrl(false)} style={style}></div>
  )
}

export default OthersImg