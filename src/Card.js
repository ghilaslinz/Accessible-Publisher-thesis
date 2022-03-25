



import {Route, Link, Router} from 'react-router-dom';
import Topic from './Topic';
import data from './data.json';
import FirstPage from './FirstPage'
import { db } from "./firebase";
import React, { useState,useEffect } from 'react';
import { useAuth } from "./contexts/AuthContext"
import DisplayForm from './DisplayForm';
import DisplayId from './DisplayId';
import Display from './Display';
function Card() {

  const [databases, setDatabases] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth(); 

  function getDatafromDatabse() {
  
     if(currentUser) {
       setLoading(true);
       db.collection('users')
       .doc(currentUser?.uid)
       .collection('databases')
       .get().then((item) => {
         const items = item.docs.map(doc => ({ ...doc.data(), id: doc.id }));
         console.log(items);
     console.log(item.id)
        
        setDatabases(items);
        setLoading(false);
        //console.log(databases[1])
   
      });
  
   
   }else {
     setDatabases([])
     console.log("erreur ")
   }
   
    }
   
         useEffect(() => {
           getDatafromDatabse();
           // eslint-disable-next-line
         }, []);
       
  return (
    <div >
        

    {/*
    {
      user.map((item)=>
    <div><Link to={"/user/"+item.id+"/"+item.name}>{item.name}</Link></div>)
    }
  */}
 {
      databases.map((database, id) =>
    
     <div key={id}> 
     
     
     <Link to={`/donnes/${database.title}`}>
       {database.title}
     </Link>
     </div>
     )
    }
    
    </div>
 
  )
}

export default Card









