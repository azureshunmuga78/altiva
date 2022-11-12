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
  return  <><Grid item xs={3} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
  <Card sx={{ maxWidth: 425 }}>
    <CardActionArea>
      <CardMedia class="product-thumb"
        component="img"
        height="170"
        image={data.renditions.downloadOriginal ? data.renditions.downloadOriginal[0].href:null}
        alt="green iguana" onClick={handleClickCatdetail.bind(this, data.id)}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.properties.ProductLabel["en-US"]}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {data.properties.ProductNumber}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.properties.ProductShortDescription["en-US"]}
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
