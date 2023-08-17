import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import logo from '../../assets/logoIvessBlanco.png';



const Footer = () =>{
    return (
      <Box
      component="footer"
      sx={{
        backgroundColor: "#0464ab",
        p: 3
      }}
    >
      <Container>
        <Grid container align="center" >
          <Grid item xs={6} sm={4} sx={{ borderBottom: '2px solid #6b93be',display:"flex", flexDirection: 'column', justifyContent:"space-around", padding:"1rem"}}>
            <Typography variant="h7" component="h4" color="#ffffff" gutterBottom sx={{ textAlign: 'center', fontFamily:"montserrat,sans-serif"}}>
              <Link href="#"  color="inherit" sx={{textDecoration: 'none', '&:hover': { color: '#044f98' },fontWeight:300 }}>Descarga de Analisis</Link>
            </Typography>
            <Typography variant="h7"  component="h4" color="#ffffff" gutterBottom sx={{ textAlign: 'center', fontFamily:"montserrat,sans-serif"}}>
              <Link href="#" color="inherit" sx={{textDecoration: 'none','&:hover': { color: '#044f98' },fontWeight:300}}>Zonas de distribucion</Link>
            </Typography>
            <Typography variant="h7"  component="h4" color="#ffffff" gutterBottom sx={{ textAlign: 'center', fontFamily:"montserrat,sans-serif"}}>
              <Link href="#" color="inherit" sx={{textDecoration: 'none','&:hover': { color: '#044f98' },fontWeight:300 }}>Trabaja con nosotros</Link>
            </Typography>
            
          </Grid>
          <Grid item xs={6} sm={4} sx={{ borderBottom: '2px solid #6b93be', padding:"1rem"}}>
            <Typography variant="h6" color="#ffffff" gutterBottom sx={{ textAlign: 'center',fontFamily:"montserrat,sans-serif"}}>
            CONTACTO
            </Typography>
            <Typography variant="h6" color="#ffffff" gutterBottom>
            <Link href="#" color="inherit" sx={{textDecoration: 'none', '&:hover': { color: '#044f98' } }}>XXXX-XXXX</Link>
            </Typography>
            <Link href="https://www.facebook.com/" sx={{ textDecoration: 'none', color: 'white', '&:hover': { color: '#044f98' } }}>
              <Facebook  fontSize='large'/>
            </Link>
            <Link href="https://www.instagram.com/" color="inherit" sx={{ textDecoration: 'none', color: 'white', '&:hover': { color: '#044f98' } }} >
              <Instagram fontSize='large'/>
            </Link>
            <Link href="https://www.twitter.com/" color="inherit" sx={{ textDecoration: 'none', color: 'white', '&:hover': { color: '#044f98' } }}>
              <Twitter fontSize='large'/>
            </Link>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ borderBottom: '2px solid #6b93be',display: { xs:"none",sm:"flex" }, alignItems: 'center', justifyContent: 'center'}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:100}}>
                  <img src={logo} alt="Imagen" style={{ maxWidth: '100%', maxHeight: '70%', objectFit: 'cover',marginLeft:{xs:"20vw",sm:"0px"} }} />
            </Box>
          </Grid>
        </Grid>

        <Box mt={1}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"El Jumillano S.A. empresa que elabora sus productos bajo normas IVESS. | Disclaimer | web: neurart"}
            <Link color="inherit" href="/home">
              Your Website
            </Link>
          </Typography>
        </Box>
      </Container>



    </Box>
    )
}

export default Footer;