import axios from "axios";
import { useEffect, useState } from "react";
import "./About.css";
import "./carousel.css";
import he from "he";
var Carousel = require('react-responsive-carousel').Carousel;



// export default About;

const ProductCarosuel = () => {
  
  const [imageresponsebody, setImageResponseBody] = useState([]);
  var productid = window.location.href;
  productid=productid.split("/").pop().replaceAll('-', '');

  const config = {
    headers: {
      "X-Auth-Token": "50b16e4b4aac4ab185e16e331b0c1c97",
      "Access-Control-Allow-Origin": "*",
    },
  };

  
  const imageurl ="https://atci-sandbox03.sitecoresandbox.cloud/api/entities/query?query=Definition.Name=='M.Asset' AND Parent('PCMProductToAsset').id=="+productid;

 
  
  useEffect(() => {
    
    axios
      .get(imageurl, config)
      .then((response) => {
        // console.log(response.data.properties);
        setImageResponseBody(response.data.items);
        console.log(response.data);
       
        //setImg(response.data.properties.Blog_Title);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [imageurl]);

  

  return (
    (imageresponsebody.length > 1 )&&(
    <>
     
     
      
     <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <>
{imageresponsebody.map((imagedata,index)=>{
       return  <>          <div class="swiper-slide" id="vis">
                    <img src={imagedata.renditions.downloadOriginal[0].href} />
                   
                </div>
                </>
              })}
          </>      
           </div>
           <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
           </div>
      
            </>
       )     
      
   
    
  );
};

export default ProductCarosuel;
