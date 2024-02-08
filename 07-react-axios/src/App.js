import React, { useState,useEffect } from 'react';
import axios from 'axios';

import './App.css';

// jsx
function App() {

  const [arr,setArr] = useState([]);

  useEffect(()=>{
    axios.get("https://www.w3schools.com/angular/customers.php")
      .then((postRes)=> {
        // ES6 - Destrucing
        const {data} = postRes;
        const {records} = data;
        console.log(postRes)
        console.log(data);
        console.log(records);
        setArr(records);
      },(errRes)=>{
        console.log(errRes);
      });

  },[]);

  return (
   <React.Fragment>
      <h5>{JSON.stringify(arr)}</h5>
      <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>City</th>
                <th>Country</th>
            </tr>
            {
                arr.map( (element,index) => (
                    <tr>
                       <td>{index+1}</td>
                       <td>{element.Name}</td>   
                       <td>{element.City}</td>   
                       <td>{element.Country}</td>   
                    </tr>
                )
                )
            }
        </table>
   </React.Fragment>
  );
}

export default App;
