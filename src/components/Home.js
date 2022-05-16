
import React, { useContext} from 'react';
import '../static/css/App.css';
import Cards from '../components/Cards';
import { HomeContext } from '../context/HomeContext';
import Button from './Button';
import logo from "../static/images/other/logo.png"

const Home = () => {  
  const {loading, cards} = useContext(HomeContext);
  return (
    <div className='relative'>
      <div className='logo'>
        <img src={logo} className=" logoimg " alt="logo" />
        <div className='center'>
          <Button />
        </div>

      </div>

      <Cards cards={cards} loading={loading} n="40" detail={true} />

    </div>)


}

export default Home;
