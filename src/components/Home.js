
import React, { useContext, useEffect } from 'react';
import '../static/css/App.css';
import Cards from '../components/Cards';
import { HomeContext } from '../context/HomeContext';
import logo from "../static/images/other/logo.png"

const Home = () => {  
  const {loading, cards} = useContext(HomeContext);
  useEffect(() =>{
   console.log(1)
    })
  return (
    <div className='relative'>
      <div className='logo'>
        <img src={logo} className="logoimg img-fluid" alt="logo" />
      </div>
      <Cards cards={cards} loading={loading} n="40" detail={false} />
    </div>)

}

export default Home;
