import React,{useState} from 'react'
import "../static/css/AllCards.css"

const AllCards = () => {
    const [show, setShow] = useState(false);
   console.log(show);
   const buttonHandler = () => {
    setShow(show => !show)
  }
    return(  
        <div className='row'>
            
            <div className='col-8'>
                <div className='container test'>
                    <div className='title'>
                        <h1>List of all cards</h1>
                    </div>
                    <div className='container'>
                        <div className='filtros row'>
                            <div className='col display'>
                                <button  className="button4" onClick={buttonHandler}>Filter</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container test'><h1>uhuy</h1></div>
            </div>
            <div className='detail col-4'>
                uhy
            </div>
            <div className='container filter row' style={{ display: show ? "block" : "none" }}>
                <div className='col-sm-1 display check '>
                
                

                </div>

            </div>
        </div>
        
    )
}

export default AllCards