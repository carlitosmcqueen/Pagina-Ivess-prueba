import React from "react";
import Grid from "@mui/material/Grid";

import {Box,Button,Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import ivessHome from "../../assets/ivessSenora2.jpg";

const Main1 = () =>{

    return(
        <Container disableGutters>
            <Grid container >
                <Grid item xs={12} sm={12} md={7} sx={{ display:"flex", justifyContent:"space-between", alignItems: "center",padding:{xs:"10px 10px",sm:"20px 20px", md:"50px "}}}>
                    <Box sx={{ display:"flex",height:{xs:"auto",lg:"29vh"},justifyContent:"space-around",flexDirection:'column',alignItems:"space-between"}}>
                        <Box sx={{padding:"10px"}}>
                            <Box sx={{display:"flex",flexDirection:{xs:"column",sm:"row"}}}>
                            <Typography variant="h4" fontFamily='montserrat,sans-serif' fontWeight="bold" >
                            IVESS
                            </Typography>
                            <Typography variant="h4" fontFamily='montserrat,sans-serif' fontWeight="bold" sx={{marginLeft:{xs:"0px",sm:"10px"}}} >
                            Somos el Agua
                            </Typography>

                            </Box>
                        <Typography variant="h7" component="h4" sx={{wordBreak:"normal", lineHeight: 2,fontFamily:"montserrat,sans-serif", fontWeight:"bold" , padding:"10px 0px"}}>
                            Desde hace más de 60 años nos convoca una misma pasión: servir con excelencia a los hogares argentinos.
                            Así nacimos y así continuamos: esforzándonos cada día para brindar la mejor experiencia de reparto a domicilio.
                        </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', width:"100%", margin:"10px 0px 0px 10px", justifyContent:{xs:"center",md:"start"}}}>
                        <Button color="primary" variant="contained">
                            SABER MAS
                        </Button>
                        </Box>
                    </Box>         
                </Grid>
                <Grid item xs={12} sm={12} md={5} sx={{padding:{xs:"0px",sm:"0px 20px",md:"30px"}}} >
                    <Box sx={{height:{sx:"15vh",sm:"35vh", md:"38vh"}, display:"flex", justifyContent:{xs:"center"}}}>
                    <img src={ivessHome} justifyContent="center" alt="ImgSenora" width="80%"/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    
    )
}
export default Main1;