import axios from "axios";
import { useEffect, useState } from "react";
import "./About.css";
import MenuBar from "./MenuBar";




const About = () => {
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
    "https://atci-sandbox03.sitecoresandbox.cloud/api/entities/32278";

  useEffect(() => {
    axios
      .get(url, config)
      .then((response) => {
        // console.log(response.data.properties);
        setBody(response.data.properties.Blog_Body.replaceAll("^\"|\"$", ""));
        setQuote(response.data.properties.Blog_Quote.replace("&lt;h1&gt;", ""));
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
      <div id="content" className="container" > 
      <div className="heading-container" dangerouslySetInnerHTML={{ __html: "<h1>"+title+"</h1>" }}></div>
      <img src="./about-img.png" alt="about"  align="right" className="aboutus-img"/>
     
      
      <div dangerouslySetInnerHTML={{ __html: quote }}></div>
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
      </div>
    </>
  );
};

export default About;
