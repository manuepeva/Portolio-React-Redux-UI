import React, {useState} from "react";
import { CardMedia } from "@material-ui/core";
import axios from 'axios'
import img2 from '../../img/acupari.png'
const Test = () => {
  
  const [images, setImages] = useState({})
  const getUnplashInfo = async () => {
    let key = "563492ad6f91700001000001b242516b875b47449f5073c6fdf7fb24";
    let headers = {
      Authorization: key,
    };
    const url = "https://api.pexels.com/v1/search?query=tech";
    const getInfo = await axios(url, {
      method: "GET",
      headers: headers,
    });
    setImages(getInfo.data.photos);
  };
  getUnplashInfo();

  const imgArray = Object.entries(images);
  return (
    <div>
      {
          imgArray.map(img => (
            <CardMedia
            image={img2}
            title="Manuel Pérez Portfolio"
          />
          ))
      }
    </div>
  );
};

export default Test;
