import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {

  useEffect(()=>{
    async function getData(){
      const response = await axios.get(
        "http://localhost:3000/"
      );
      console.log(response.data);
    }

    getData();
  },[]);

  return(
    <>
      <h1>Hey!</h1>
    </>
  )
}

export default App
