
import React from 'react';
import '../static/css/App.css';
import Cards from '../components/Cards';

import Button from './Button';
import logo from "../static/images/other/logo.png"

const Home = () => {  
 
  return (
    <div className='relative'>
      <div className='logo'>
        <img src={logo} className=" logoimg " alt="logo" />
        <div className='center'>
          <Button />
        </div>

      </div>

      <Cards n= "40"detail={false} />

    </div>)


}

export default Home;
