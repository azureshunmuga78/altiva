
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import {
  AppBar,
  Typography,
  Toolbar,
  Tab,
  Tabs,
 
} from "@mui/material";




const ProductFamiles = () => {
    const navigate = useNavigate();
    var [responsebody, setBody] = useState([]);
    const [itemCount, setCount] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    
    const config = {
      headers: {
        "X-Auth-Token": "50b16e4b4aac4ab185e16e331b0c1c97",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const url =
    "https://atci-sandbox03.sitecoresandbox.cloud/api/entities/query?query=(Definition.Name%20==%20%22ProductFamilyName%22)";
    
    const handleClickCatdetail = function(pagename) { 
      {/*navigate("/catalogue/"+pagename);*/}
      navigate("/catalogue/"+pagename); 
      //navigate.push("/catalogue/"+pagename);
       
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
  const [value, setValue] = useState();
  useEffect(() => {
    
    getData1();
    
  }, []);
 
  
    return (
    <>
    
    <AppBar position="relative" sx={{ background: "#5f8ee4 " }}>
        <Toolbar>
        <Tabs
            sx={{ margin: "left", opacity:0.9 }}
            textColor="#ffffff"
            value={value}
            onChange={(e, value) => setValue(value)}
          >

<>
{responsebody.map((data,index)=>{
  return  <>
            <Tab
              onClick={handleClickCatdetail.bind(this, data.properties.CatalogName.replaceAll(' ', '-'))}
              icon=""
              label={data.properties.CatalogName}
              value={data.properties.CatalogName}
            ></Tab>

    </>   
})}
</>

            

            </Tabs>
            </Toolbar>
            </AppBar>
            
           
           
           
      
       
     
    </>
  );
};


export default ProductFamiles;
