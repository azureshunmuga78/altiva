import "./Products.css";
import axios from "axios";
import MenuBar from "./MenuBar";
import { useEffect, useState } from "react";

const Products = () => {
  const [label, setLabel] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [img, setImg] = useState("");

  const [label2, setLabel2] = useState("");
  const [name2, setName2] = useState("");
  const [number2, setNumber2] = useState("");
  const [img2, setImg2] = useState("");

  const [label3, setLabel3] = useState("");
  const [name3, setName3] = useState("");
  const [number3, setNumber3] = useState("");
  const [img3, setImg3] = useState("");

  const config = {
    headers: {
      "X-Auth-Token": "7e67aa999e3547428e321a9b7413b563",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const url =
    "https://atci-sandbox03.sitecoresandbox.cloud/api/entities/33930";

  const url2 =
    "https://atci-sandbox03.sitecoresandbox.cloud/api/entities/33504";

  const url3 =
    "https://atci-sandbox03.sitecoresandbox.cloud/api/entities/32309";

  const getData1 = async () => {
    await axios
      .get(url, config)
      .then((response) => {
        setLabel(response.data.properties.ProductLabel["en-US"]);
        setName(response.data.properties.ProductName);
        setNumber(response.data.properties.ProductNumber);
        setImg(response.data.renditions.downloadOriginal[0]["href"]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getData2 = async () => {
    await axios
      .get(url2, config)
      .then((response) => {
        setLabel2(response.data.properties.ProductLabel["en-US"]);
        setName2(response.data.properties.ProductName);
        setNumber2(response.data.properties.ProductNumber);
        setImg2(response.data.renditions.downloadOriginal[0]["href"]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getData3 = async () => {
    await axios
      .get(url3, config)
      .then((response) => {
        setLabel3(response.data.properties.ProductLabel["en-US"]);
        setName3(response.data.properties.ProductName);
        setNumber3(response.data.properties.ProductNumber);
        setImg3(response.data.renditions.downloadOriginal[0]["href"]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData3();
    getData1();
    getData2();
  }, []);

  return (
    <>
      <MenuBar />
      <h1> Our Products</h1>
      <div className="content">
        <img src={img} alt="img"></img>
        <h1>{label}</h1>
        {number}
        {name}
      </div>

      <div className="content">
        <img src={img2} alt="img2"></img>
        <h1>{label2}</h1>
        {number2}
        {name2}
      </div>

      <div className="content">
        <img src={img3} alt="img3"></img>
        <h1>{label3}</h1>
        {number3}
        {name3}
      </div>
    </>
  );
};

export default Products;
