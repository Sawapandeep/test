import React from "react";
import './App.css' ;
import { Brand,Cta,Navbar } from "./components";
import{ Footer,Functionality,Possibility,Features,What,Header } from './containers';

const App=()=>{
  return(
    <div className="App">
      {/* <h1>Horizon-Iceberg</h1> */}
      <Navbar/>
      {/* <div className="gradient__bg">
        
        
      </div> */}
      <Header />
      {/* <Brand/> */}
      <What/>
      {/* <Features/> */}
      <Possibility/>
      {/* <Cta/> */}
      <Functionality/>
      <Footer/>
    </div>
  )
}



export default App;
