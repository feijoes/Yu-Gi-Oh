import React,{useState,useContext} from 'react'
import "../static/css/AllCards.css"
import CardDetail from './CardDetail';
import Cards from './Cards';
import { HomeContext } from '../context/HomeContext';
import AllFilters from "./AllFilters"
const AllCards = () => {
    const [show, setShow] = useState(false);
    const {detailCard,setFilter,filter} = useContext(HomeContext)
   
   const buttonHandler = () => {
    setShow(show => !show)
    
  }
  const race = {"atribute": "race", "values" : ['zombie', 'fiend', 'normal', 'rock', 'warrior', 'winged beast', 'spellcaster', 'beast', 'fairy', 'field', 'fish', 'beast-warrior', 'thunder', 'machine', 'sea serpent', 'aqua', 'plant', 'dragon', 'reptile', 'psychic', 'insect', 'pyro', 'dinosaur', 'wyrm', 'cyberse', 'ritual', 'divine-beast', 'cyverse']}
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
            <CardDetail  card={detailCard}/>
            </div>
            <div className='container filter row' style={{ display: show ? "block" : "none" }}>
                <div className='col-sm-1 display check '>
                    <AllFilters list={race} set={setFilter} filter={filter}/>
                </div>
            </div>
            
        </div>
        
    )
}

export default AllCards