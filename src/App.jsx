import React, { useState, useEffect, use } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAcc from "./components/CreateAcc";
import DashBoard from "./components/DashBoard";
function App() {
  const [isNew, setIsNew] = useState(null);


    useEffect(() => {
      const storedValue = localStorage.getItem("isNew");
      setIsNew(storedValue);
    }, []);

    const reRender = () =>{
      setIsNew(localStorage.getItem("isNew"))
    }

    const debug = () => {
    console.log("OK")
  }

  return (
    <>
      {isNew === null ? <CreateAcc reRender={reRender}></CreateAcc> : <DashBoard></DashBoard>}
    </>
  );
}

export default App;
