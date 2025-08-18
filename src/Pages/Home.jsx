import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { FaGithub } from 'react-icons/fa';
import axios from 'axios';

const Home = () => {
    const[alldata,setAlldata]= useState([]);
  const[searchname,setSearchname]=useState("");
  const[filteredlist,setfilteredlist]=useState([]);

  //handle input box chaneg

  const handleinput=(event)=>{

    event.preventDefault();
    setSearchname(event.target.value);

  }

  //change filtered list after hitting button
  const submit=(event)=>{
    event.preventDefault();
   const newlist=alldata.filter((item)=>{
   
   return  item.title.toLowerCase().includes(searchname.toLowerCase())
   })
   
   setfilteredlist(newlist);
   
  }

  useEffect(()=>{
   const promise= axios.get('https://raw.githubusercontent.com/piyushmishraa/cs_gloss/main/db.json');
   promise.then((response)=>{
    
     setAlldata(response.data.resources);
     setfilteredlist(response.data.resources);
     
   })
   
  },[])
  return (
    <div>
        <h1 className="title">Here are your CS related resources</h1>
    <form onSubmit={submit}>
      <input type="text" value={searchname} onChange={handleinput}/>
      <button type="submit" > click</button>
    </form>
    <div className="card-container">
      {filteredlist.map((item, index) => (
        <Card 
          key={index} 
          title={item.title} 
          category={item.category} 
          url={item.url} 
        />
      ))}
    </div>
       <a 
  href="https://github.com/piyushmishraa/cs_gloss" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="contribute-btn"
>
  <FaGithub style={{ marginRight: "8px", fontSize: "1.2rem" }} />
  Contribute on GitHub
</a>
    </div>
  )
}

export default Home