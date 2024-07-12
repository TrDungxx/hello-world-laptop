import React from "react";
import "./web.css";
import Web from "./web";
import Header from "./header";
import myClips from "./MyClip.json";
import Footer from "./footer";




function Webrun() {
  return (
    <section>
   <Header/>
      <Web/>
      <Footer/>
        
      
    </section>
  );
}
export default Webrun;