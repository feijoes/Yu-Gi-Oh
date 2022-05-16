import React,{useState, useContext} from 'react'
import "../static/css/AllCards.css"
import Cardback from './Cardback';
import { HomeContext } from '../context/HomeContext';
import Cards from './Cards';
const AllCards = () => {
    const [show, setShow] = useState(false);
    const {img} = useContext(HomeContext);
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
                <div className='container test'><Cards n="10" detail={true}/></div>
            </div>
            <div className='detail col-4'>
                <Cardback img={img}/>
            </div>
            <div className='container filter row' style={{ display: show ? "block" : "none" }}>
                <div className='col-sm-1 display check '>
                
                

                </div>

            </div>
        </div>
        
    )
}

export default AllCards