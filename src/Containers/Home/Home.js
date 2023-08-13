import React from "react";
import { useEffect ,useState} from "react";
import Grid from "@mui/material/Grid";
import {Box,Button} from "@mui/material";
import Typography from "@mui/material/Typography";

import Carousel from "react-material-ui-carousel"

import HomeItem from "./HomeItems";
import "./Home.css"

import Main1 from "../main/main1"
import Main2 from "../main/main2"
import Main3 from "../main/main3";


export const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const URL = `https://fakestoreapi.com/products`
    fetch(URL)
    .then(res=> res.json())
    .then(data => setProducts(data))
    .catch(err => console.log("as"))
    .finally()
  },[])
  

  const carouselStyle = {
    backgroundColor: 'transparent',
  };
  
    return(

    <Box
      component="main"
      sx={{
        
        backgroundColor:"white"
      }}
      
    >
        <Grid container sx={{mt:"10vh"}} >
          <Grid item xs={12} sx={{backgroundColor:"#afddf4"}}>
            <Main1></Main1>
          </Grid>
          <Grid item xs={12}>
            <Main2></Main2>
          </Grid>
          <Grid item xs={12}>
            <Main3></Main3>
          </Grid>
          
          <Grid item xs={12} align="center" padding="1rem" sx={{backgroundImage:`url(https://www.somoselagua.com.ar/img/bg-ivess.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',}}>

              <Typography variant="h4" align="center" margin="1rem" fontFamily='montserrat,sans-serif' color="#315991" fontWeight="bold">
                Nuestros Productos
              </Typography>
              <Carousel  indicators={false} style={carouselStyle} navButtonsAlwaysVisible={false}>
              {products.map( item =><HomeItem kei={item.id} item={item}></HomeItem>)}
              </Carousel>
              <Box sx={{
                paddingTop:3,
              }}>
              <Button color="primary" variant="contained">
                Ver productos
              </Button>
              </Box>
          </Grid>
        </Grid>        
        
    </Box>
    
    )
}
export default Home;