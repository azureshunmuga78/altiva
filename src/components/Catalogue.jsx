import { useNavigate } from "react-router-dom";
import "./Products.css";
import axios from "axios";
import MenuBar from "./MenuBar";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

const Catalogue = () => {
  var [responsebody, setBody] = useState([]);
  const [itemCount, setCount] = useState([]);
  
  const config = {
    headers: {
      "X-Auth-Token": "50b16e4b4aac4ab185e16e331b0c1c97",
      "Access-Control-Allow-Origin": "*",
    },
  };



  const url =
    "https://atci-sandbox03.sitecoresandbox.cloud/api/entities/query?query=(Definition.Name%20==%20%22M.PCM.Catalog%22)";

    const handleClickCatdetail = function(pagename) { 
      navigate("/catalogue/"+pagename);
      console.log(pagename);
    };

  const getData1 = async () => {
    await axios
      .get(url, config)
      .then((response) => {
        setBody(response.data.items);
        setCount(response.data.items.length);
        console.log(response.data.items.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  useEffect(() => {
    
    getData1();
    
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <MenuBar />
      <div id="content" className="container" > 
      <div className="heading-container"><h1> Our Catalogue</h1></div>
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
       
       <>
{responsebody.map((data,index)=>{
  return  <><Grid item xs={3} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
  <Card sx={{ maxWidth: 425 }} >
    <CardActionArea >
      <CardMedia class="product-thumb"
        component="img"
        height="170"
        image={data.renditions.downloadOriginal[0].href}
        alt="green iguana" onClick={handleClickCatdetail.bind(this, data.properties.CatalogName.replaceAll(' ', '-'))}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.properties.CatalogName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.properties.CatalogDescription[0]}
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
  );
};

export default Catalogue;
