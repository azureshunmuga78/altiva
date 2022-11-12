import React from 'react'
import MenuBar from './MenuBar'
import SecondaryMenuBar from "./SecondaryMenuBar";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <MenuBar />
      <SecondaryMenuBar />
      <div id="content" className="container contactUsMain" > 
          <div className="heading-container" dangerouslySetInnerHTML={{ __html: "<h1>Contact Us</h1>" }}></div>
          <div class="row">
            <div id="needhelp" class="col">
                <div class="icon"></div>
                  <h2 class="subtitle">BY PHONE</h2>
                  <p class="desc">
                    <small>(Monday to Friday, 9am to 6pm IST)</small>
                    <br/>
                    India Toll-Free:<br/>
                    1-777-777-7777
                    <br/>
                    International:<br/>
                    1-888-888-8888
                  </p>
              </div>
            <div id="start-case" class="col">
              <div class="icon newcase"></div>
              <h2 class="subtitle">START A NEW CASE</h2>
              <p class="desc">
                Just send us your query or suggestion and we will give you the help you need.
              </p>
              
              <div class="button">
              <button class="btn">Start Here</button>
              </div>

            </div>
            <div id="livechat" class="col">
              <div class="icon"></div>
              <h2 class="subtitle">LIVE CHAT</h2>
              <p class="desc">
                  Chat with a member of our in-house team.<br/><br/>
              </p>
              <div class="button">
              <button class="btn">Start Chat</button>
              </div>

            </div>
      </div>
      </div>
      </>
      
  )
}

export default ContactUs