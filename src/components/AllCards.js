import React,{useState,useContext} from 'react'
import "../static/css/AllCards.css"
import CardDetail from './CardDetail';
import Cards from './Cards';
import { HomeContext } from '../context/HomeContext';
import AllFilters from "./AllFilters"

const AllCards = () => {
    const [show, setShow] = useState(false);
    const {detailCard,setFilter,filter} = useContext(HomeContext)
   const [hover,sethover]= useState(false)
   const buttonHandler = () => {
    setShow(show => !show)
    
  }

  const race = {"atribute": "race", "values" : ['zombie', 'fiend', 'normal', 'rock', 'warrior', 'winged beast', 'spellcaster', 'beast', 'fairy', 'field', 'fish', 'beast-warrior', 'thunder', 'machine', 'sea serpent', 'aqua', 'plant', 'dragon', 'reptile', 'psychic', 'insect', 'pyro', 'dinosaur', 'wyrm', 'cyberse', 'ritual', 'divine-beast', 'cyverse']}
  const atribute = {"atribute":"attribute","values":['dark', 'earth', 'fire', 'light', 'water', 'wind','divine'] }
  const type = {"atribute":"type","values":['Spell Card', 'Trap Card', 'Normal Monster', 'Effect Monster', 'Tuner Monster', 'Flip Monster', 'Flip Effect Monster', 'Flip Tuner Effect Monster', 'Spirit Monster', 'Union Effect Monster', 'Gemini Monster', 'Pendulum Effect Monster', 'Pendulum Normal Monster', 'Pendulum Tuner Effect Monster', 'Ritual Monster', 'Ritual Effect Monster', 'Toon Monster', 'Fusion Monster', 'Synchro Monster', 'Synchro Tuner Monster', 'XYZ Monster', 'Link Monster']}
    return(  
        <div className='row'>
            <h1>{hover ? 'existe' : 'n existe'} </h1>
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
                <div className='container test'><Cards sethover={sethover} n="10" detail={true}/></div>
            </div>
            <div className='detail col-4'>
            <CardDetail  card={detailCard}/>
            </div>
            <div className=' filter filters' style={{ display: show ? "block" : "none" }}>
                <AllFilters list={race} set={setFilter} filter={filter}/>
                <AllFilters list={atribute} set={setFilter} filter={filter}/>
                <AllFilters list={type} set={setFilter} filter={filter}/>
            </div>
            
        </div>
        
    )
}

export default AllCards