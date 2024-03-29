import "./Products.css";
import axios from "axios";
import MenuBar from "./MenuBar";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Products = () => {
  var [responsebody, setBody] = useState([]);
  const [itemCount, setCount] = useState([]);
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
    "https://atci-sandbox03.sitecoresandbox.cloud/api/entities/query?query=(Definition.Name%20==%20%22M.PCM.Product%22)";

  const url2 =
    "https://atci-sandbox03.sitecoresandbox.cloud/api/entities/33504";

  const url3 =
    "https://atci-sandbox03.sitecoresandbox.cloud/api/entities/32309";

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

  return (
    <>
      <MenuBar />
      <div className="heading-container"><h1> Our Products</h1></div>
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
          
       <>
{responsebody.map((data,index)=>{
  return  <><Grid item xs={3} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
  <Card sx={{ maxWidth: 425 }}>
    <CardActionArea>
      <CardMedia class="product-thumb"
        component="img"
        height="170"
        image={data.renditions.downloadOriginal[0].href}
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
    </>
  );
};

export default Products;
