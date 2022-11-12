import React from 'react'
import MenuBar from './MenuBar'
import SecondaryMenuBar from "./SecondaryMenuBar";
import "./ContactUs.css";

const Chat = () => {
  return (
    <>
      <MenuBar />
      <SecondaryMenuBar />
      <div id="content" className="container contactUsMain" > 
          <div className="heading-container" dangerouslySetInnerHTML={{ __html: "<h1>Live Chat</h1>" }}></div>
          <div class="row">
            <h2>Comming Soon...</h2>
      </div>
      </div>
      </>
      
  )
}

export default Chat