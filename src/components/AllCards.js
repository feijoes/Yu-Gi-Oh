import React from 'react'
import "../static/css/AllCards.css"

const AllCards = () => {
    return(  
        <div className='row'>
            <div className='col-8'>
            <div className='container test'>
                <div className='title'>
                    <h1>List of all cards</h1>
                </div>
                <div className='container'>
                <div className='filtros row'>
                    <div className='col'>
                        <h2>Filterㅤ</h2>
                        <button  class="button4">Chose</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='detail col-4'>
                box
            </div>

        </div>
        
    )
}

export default AllCards