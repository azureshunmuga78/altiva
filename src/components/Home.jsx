import axios from "axios";
import { useEffect, useState } from "react";
import "./About.css";
import MenuBar from "./MenuBar";
import SecondaryMenuBar from "./SecondaryMenuBar";


var Carousel = require('react-responsive-carousel').Carousel;

const Home = () => {
  const [body, setBody] = useState([]);
  const [quote, setQuote] = useState([]);
  const [title, setTitle] = useState([]);

  const config = {
    headers: {
      "X-Auth-Token": "50b16e4b4aac4ab185e16e331b0c1c97",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const url =
    "https://atci-sandbox03.sitecoresandbox.cloud/api/entities/34221";

  useEffect(() => {
    axios
      .get(url, config)
      .then((response) => {
        // console.log(response.data.properties);
        setBody(response.data.properties.Blog_Body.replaceAll("^\"|\"$", ""));
        setQuote("<b>"+response.data.properties.Blog_Quote.replace("&lt;h1&gt;", "")+"</b>");
        setTitle(response.data.properties.Blog_Title.replaceAll("^\"|\"$", ""));
        //setImg(response.data.properties.Blog_Title);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <>
      <MenuBar />
      <SecondaryMenuBar />
      <div id="content" className="container" > 
      <div className="heading-container" dangerouslySetInnerHTML={{ __html: "<h1>"+title+"</h1>" }}></div>
      <div dangerouslySetInnerHTML={{ __html: quote }}></div>
     <div className="carosuel-container" >
     <Carousel infiniteLoop showArrows={true} autoPlay={true} >
                <div>
                    <img src="/home-slider/1.jpg" />
                   
                </div>
                <div>
                <img src="/home-slider/2.jpg" />
                    
                </div>
                <div>
                <img src="/home-slider/3.jpg" />
                   
                </div>
                <div>
                <img src="/home-slider/4.jpg" />
                    
                </div>
               
            </Carousel>
      </div>  
      
     
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
      </div>
    </>
  );
};

export default Home