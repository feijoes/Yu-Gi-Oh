import React,{useContext,useState,useEffect} from 'react'
import { MDBCol} from "mdbreact";
import { HomeContext } from '../context/HomeContext';
const Search = () => {
  const {setFilter,filter} = useContext(HomeContext);
  const [input, setInput] = useState("")


  useEffect(() => {
    const timer = setTimeout(() => {
      let a = filter;
      if (!input.length) {delete a["fname"]; setFilter(({...a}));}
      else{  a["fname"] = input  
      setFilter(({...a})) }}
      , 600);
    return () => clearTimeout(timer)
    // eslint-disable-next-line
  }, [input]);
    return (
        <MDBCol md="6">
          <form className="form">
            <input className="form-control-sm" onChange={(e)=>{setInput(e.target.value)}}  type="text" placeholder="Search" aria-label="Search" />
          </form>
        </MDBCol>
      );
}

export default Search