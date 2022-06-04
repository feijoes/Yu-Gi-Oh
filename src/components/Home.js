
import React from 'react';
import '../static/css/App.css';
import Button from './Button';
import logo from "../static/images/other/logo.png"
import Cards2 from './Cards2';

const Home = () => {  
 
  return (
    <div className='relative'>
      <div className='logo'>
        <img src={logo} className=" logoimg " alt="logo" />
        <div className='center'>
          <Button />
        </div>
      </div>
      <Cards2 n= "40"detail={false} />
    </div>)


}

export default Home;
