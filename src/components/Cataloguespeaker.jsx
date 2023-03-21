import React from "react";
import "./Products.css";
import axios from "axios";
import MenuBar from "./MenuBar";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { useNavigate, useSearchParams  } from "react-router-dom";
import SecondaryMenuBar from "./SecondaryMenuBar";


const Catalogue = (props) => {
  var [responsebody, setBody] = useState([]);
  var [catalogueid, setID] = useState([]);
  var [responseproductbody, setProBody] = useState([]);
  var [productcolor, setColor] = useState([]);
  var catalogName = window.location.href;
  var catalogName = window.location.href;
 
  
  console.log(window.location.href);
 
  catalogName=catalogName.split("/").pop().replaceAll('-', ' ');
  const navigate = useNavigate();
  const handleClickCatdetail = function(id) { 
    navigate("/products/"+id);
    console.log(id);
  };
  
  const config = {
    headers: {
      "X-Auth-Token": "50b16e4b4aac4ab185e16e331b0c1c97",
      "Access-Control-Allow-Origin": "*",
    },
  };



  const url =
    "https://atci-sandbox03.sitecoresandbox.cloud/api/entities/query?query=(String%28%27CatalogName%27%29==%20%20%22"+catalogName+"%22)";
    const Producturl =
    "https://atci-sandbox03.sitecoresandbox.cloud/api/entities/query?query=Definition.Name=='M.PCM.Product' AND Parent('PCMCatalogToProduct').id==";

    const Productcolor =
    "https://atci-sandbox03.sitecoresandbox.cloud/api/entities/";

  const getData1 = async () => {
    await axios
      .get(url, config)
      .then((response) => {
        setBody(response.data.items);
        setID(response.data.items[0].id);
        console.log(url);
        console.log("item count");
        console.log(response.data.items.length);
        getData2(response.data.items[0].id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getData2 = async (id) => {
    await axios
      .get(Producturl+id, config)
      .then((response) => {
        setProBody(response.data.items);
        
        console.log(Producturl+catalogueid);
        console.log("item count");
        console.log(response.data.items.length);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  useEffect(() => {
    
    getData1();
    
    
  }, []);
  const getColor = async (id) => {
    await axios
      .get(Productcolor+id+"?relatedPathProperties=AssetTypeToAsset|M.AssetType|Label,TriggersVision", config)
      .then((response) => {
       
        if(response.data.related_paths["C.PCM.ProductColor"]){
         
          {/*productcolor.push(response.data.related_paths["C.PCM.ProductColor"]);*/}
        }
        
          })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <MenuBar />
      <SecondaryMenuBar />
      <div id="content" className="container" > 
      <>
{responsebody.map((data,index)=>{
  return  <>
      <div className="heading-container"><h1> {responsebody[0].properties.CatalogLabel["en-US"]} </h1></div>
     
      {/*<img src={responsebody[0].renditions.downloadOriginal ? responsebody[0].renditions.downloadOriginal[0].href:null} alt="about"  align="right" className="aboutus-img"/>*/}
    
      <div dangerouslySetInnerHTML={{ __html: responsebody[0].properties.CatalogDescription["en-US"] }}></div>
      <div className="heading-container"><h2> All Speakers</h2></div>
      <div className="catalogue-product-container">
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
          
       <>
{responseproductbody.map((data,index)=>{
  return  <>
  
  <Grid item xs={3} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
  <Card sx={{ maxWidth: 300, minWidth: 300, PaddingLeft: 0}}>
    <CardActionArea>
      <CardMedia class="product-thumb"
        component="img"
        height="170"
        image={data.renditions.downloadOriginal ? data.renditions.downloadOriginal[0].href:null}
        alt="green iguana" onClick={handleClickCatdetail.bind(this, data.id)}/>
      <CardContent sx={{minHeight: 172}}>
        <Typography gutterBottom variant="h5" component="div">
          {data.properties.ProductName}
        </Typography>
        {/*<Typography gutterBottom variant="h6" component="div">
          {data.properties.ProductNumber}
</Typography>*/}
        <Typography variant="string" component="string">
        <div class="product-reviews-summary short">
          <div class="rating-summary">
          <span class="label"><span>Rating:</span></span>
              <div class="rating-result" title="100%">
                <span class="starcontainer"><span>100%</span></span>
              </div>
            </div>

          </div>
        </Typography>
        <Typography variant="string" component="string">
        <div class="product-item-inner">
<div class="product actions product-item-actions">
<div class="actions-primary">


<button type="submit" title="Add to Cart">


<span><img src="https://www.mangoextensions.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/a/j/ajaxaddtocartsite.jpg"/></span>
</button>

</div>
<div data-role="add-to-links" class="actions-secondary">
<a href="#" class="action towishlist" title="Add to Wish List" aria-label="Add to Wish List" data-post="{&quot;action&quot;:&quot;https:\/\/www.pebblecart.com\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;441&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly93d3cucGViYmxlY2FydC5jb20vc21hcnQtd2VhcmFibGVzL3Nob3Atbm93L2FsbC5odG1s&quot;}}" data-action="add-to-wishlist" role="button">
<span>Add to Wish List</span>
</a>
</div>
</div>
</div>
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
</Grid></>
})}

</>
      </Grid>

</div>

      </>
})}
   </>   
      </div>
    </>
  );
};

export default Catalogue;
