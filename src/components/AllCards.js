import React,{useState,useContext} from 'react'
import "../static/css/AllCards.css"
import CardDetail from './CardDetail';
import Cards from './Cards/Cards';
import { HomeContext } from '../context/HomeContext';
import AllFilters from "./Change_Cards/AllFilters"
import Search from './Change_Cards/Search';
import AllSort from './Change_Cards/AllSorts';

const AllCards = () => {
    const [showfilter, setshowfilter] = useState(false);
    const {detailCard,setFilter,filter} = useContext(HomeContext);
    const [hover, sethover] = useState(false);
    const [sort,setSort] = useState(false);
    const [n,setN] = useState(20)
   const change = (set) => {
    set(show => !show)
  }
  const race = {"atribute": "race", "values" : ['zombie', 'fiend', 'normal', 'rock', 'warrior', 'winged beast', 'spellcaster', 'beast', 'fairy', 'field', 'fish', 'beast-warrior', 'thunder', 'machine', 'sea serpent', 'aqua', 'plant', 'dragon', 'reptile', 'psychic', 'insect', 'pyro', 'dinosaur', 'wyrm', 'cyberse', 'ritual', 'divine-beast', 'cyverse']}
  const atribute = {"atribute":"attribute","values":['dark', 'earth', 'fire', 'light', 'water', 'wind','divine'] }
  const type = {"atribute":"type","values":['Spell Card', 'Trap Card', 'Normal Monster', 'Effect Monster', 'Tuner Monster', 'Flip Monster', 'Flip Effect Monster', 'Flip Tuner Effect Monster', 'Spirit Monster', 'Union Effect Monster', 'Gemini Monster', 'Pendulum Effect Monster', 'Pendulum Normal Monster', 'Pendulum Tuner Effect Monster', 'Ritual Monster', 'Ritual Effect Monster', 'Toon Monster', 'Fusion Monster', 'Synchro Monster', 'Synchro Tuner Monster', 'XYZ Monster', 'Link Monster']}
    return(  
        <div className='row'>
            <div className='col-8'>
                <div className='container test'>
                    <div className='title'>
                        <h1>List of all cards</h1>
                    </div>
                    <div className='container'>
                        <div className='filtros flex'>
                            <div className=''>
                                <button  className="button4" onClick={() => change(setshowfilter)}>Filter</button>
                            </div>
                                <Search />
                            <div className=''>
                                <button  className="button4" onClick={() => change(setSort)}>Sort</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container test test2 style-1" id='scrollcard'>
                    <Cards n={n} setN={setN} sethover={sethover} />
                    
                    
                    
                </div>
            </div>
            <div className='detail col-4'>
            <CardDetail  card={detailCard}hover={hover}/>
            </div>
            <div className='filter filters style-1 ' style={{ display: showfilter ? "block" : "none" }}>
                <button  className="button4" onClick={() => change(setshowfilter)}>X</button>
                <div className='filter2'>
                    <h1>Race of monsters</h1>
                    <hr className='line'/>
                </div>
                <AllFilters list={race} set={setFilter} filter={filter}/>
                <div className='filter2'>
                    <h1> Attribute of monster</h1>
                    <hr className='line'/>
                </div>
                <AllFilters list={atribute} set={setFilter} filter={filter}/>
                <div className='filter2'>
                    <h1>Type of card</h1>
                    <hr className='line'/>
                </div>
                <AllFilters list={type} set={setFilter} filter={filter}/>
                
            </div>
            <div className='filter' style={{ display: sort ? "block" : "none" }}>
            <button  className="button4" onClick={() => change(setSort)}>X</button>
                <AllSort />
            </div>
            
        </div>
        
    )
}

export default AllCards