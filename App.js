import React from "react";
import './App.css' ;
import { Navbar } from "./components";
import{ Footer,Functionality,Possibility,What,Header } from './containers';

const App=()=>{
  return(
    <div className="App">
      {/* <h1>Horizon-Iceberg</h1> */}
      <Navbar/>
      {/* <div className="gradient__bg">
        
        
      </div> */}
      <What/>
      <Header />
      {/* <Brand/> */}
      
      {/* <Features/> */}
      <Possibility/>
      {/* <Cta/> */}
      <Functionality/>
      <Footer/>
    </div>
  )
}



export default App;
