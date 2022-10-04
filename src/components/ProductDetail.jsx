import axios from "axios";
import { useEffect, useState } from "react";
import "./About.css";
import "./carousel.css";
import MenuBar from "./MenuBar";
import ProductCarousel from "./productcarosuel";
import he from "he";
var Carousel = require('react-responsive-carousel').Carousel;



// export default About;

const ProductDetail = () => {
  const [body, setBody] = useState([]);
  const [responsebody, setResponseBody] = useState([]);
  const [imageresponsebody, setImageResponseBody] = useState([]);
  const [quote, setQuote] = useState([]);
  const [title, setTitle] = useState([]);
  const [price, setPrice] = useState([]);
  const [instock, setInstock] = useState([]);
  const [ProductCode, setCode] = useState([]);
  const [ProductBrand, setBrand] = useState([]);
  const [ProductType, setType] = useState([]);
  var productid = window.location.href;
  productid=productid.split("/").pop().replaceAll('-', '');

  const config = {
    headers: {
      "X-Auth-Token": "50b16e4b4aac4ab185e16e331b0c1c97",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const url =
    "https://atci-sandbox03.sitecoresandbox.cloud/api/entities/"+productid;
  const imageurl ="https://atci-sandbox03.sitecoresandbox.cloud/api/entities/query?query=Definition.Name=='M.Asset' AND Parent('PCMProductToAsset').id=="+productid;

  const getimageData =  () => {
     axios
      .get(imageurl, config)
      .then((response) => {
        setImageResponseBody(response.data.items);
        console.log("related images");
        console.log(response.data.items.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  useEffect(() => {
    getimageData();
    axios
      .get(url, config)
      .then((response) => {
        // console.log(response.data.properties);
        setResponseBody(response.data);
        setBody(response.data.properties.ProductLongDescription["en-US"].replaceAll("^\"|\"$", ""));
        setQuote("\""+response.data.properties.ProductShortDescription["en-US"].replace("&lt;h1&gt;", "")+"\"");
        setTitle(response.data.properties.ProductName.replaceAll("^\"|\"$", ""));
        setPrice("<b>Price : Rs.</b>"+response.data.properties.Price);
        if(response.data.properties.InStock == true){
          setInstock("Stock: <b>Available</b>");
        }
        else{
          setInstock("Stock: <b>Not Available</b>");
        }
        setCode(response.data.properties.ProductNumber);
        setBrand(response.data.path[0].values["en-US"].replaceAll("^\"|\"$", ""));
        setType(response.data.path[1].values["en-US"].replaceAll("^\"|\"$", ""));
        console.log(response.data);
       
        //setImg(response.data.properties.Blog_Title);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  
  

    



  return (
    
    <>
      <MenuBar />
      <div id="content" className="productdetail-container" > 
     
      <div className="heading-container" dangerouslySetInnerHTML={{ __html: "<h1>"+title+"</h1>" }}></div>
      <div dangerouslySetInnerHTML={{ __html: quote }}></div>
      <div className="product-img">
      
    
     <ProductCarousel/>
            
            
 
        <p><b>{ProductCode}</b></p>
      </div>
      <div><p>Product No.: <b>{ProductCode}</b></p></div>
      <div><p>Brand: <b>{ProductBrand}</b></p></div>
      <div><p>Type: <b>{ProductType}</b></p></div>
      <div className="productPrice" dangerouslySetInnerHTML={{ __html: instock }}></div>
     <div className="productdetail" dangerouslySetInnerHTML={{ __html: body }}></div>
     <div className="productPrice" dangerouslySetInnerHTML={{ __html: price }}></div>
      
     
      </div>
    </>
  );
};

export default ProductDetail;
