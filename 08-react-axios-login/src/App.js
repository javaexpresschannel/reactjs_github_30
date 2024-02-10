import React, { useRef, useState } from "react";
import axios from 'axios';
import './App.css';

function App() {

    const [result,setResult]=useState("");
    const username = useRef("");
    const password = useRef("");

    const login = () => {

        axios.post("http://localhost:8082/api/user/login",
            {"username":username.current.value,"password":password.current.value})
            .then((posReq)=> {
                const {status} = posReq;
                if(status === 200){
                    setResult("Suuccess");
                }
            },(errRes)=>{
                setResult("Failed")
            })
    }

    return(
        <div>
            <h1>JavaExpress</h1>
            Username:<input type="text" ref={username} />
            <br></br>
            Password:<input type="password" ref={password}/>
            <br></br>
            <button onClick={login}>Login</button>
            <br></br>
            <h1>{result}</h1>
        </div>
    )
  
}

export default App;
