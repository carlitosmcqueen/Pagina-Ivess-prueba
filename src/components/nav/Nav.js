import React from "react";
import NavList from "../navList/NavList";
import {AppBar,Button,Drawer,IconButton,Box} from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react"
import logoIvess from "../../assets/ivess-logo.svg"


const Nav =()=>{

    const [open,setOpen] = useState(false)

    return(
        <>
            <AppBar position="fixed">
                
                <Container maxWidth="false" sx={{ backgroundColor: "#f1f6fd"}}>
                    <Grid container align="center" p="0">
                        <Grid item xs={3} sm={2} sx={{ order: { xs: 2, sm: 1 }}}>
                            <Box sx={{ display: 'flex', alignItems: 'center', height: 95,justifyContent: { xs: 'end', sm: 'start' }}}>
                                <IconButton color="default" size="large" onClick={() => setOpen(true)}>
                                    <MenuIcon fontSize="large" />
                                </IconButton>
                            </Box>
                        </Grid>

                        <Grid item xs={9} sm={8} sx={{order: {xs:1,sm:2}, paddingLeft:{xs:"25vw",sm:"0px"}}}>

                            <Box sx={{ display: 'flex', justifyContent:'center', alignItems: 'center', height:"95px"}}>
                                <Link href="/" underline="none" sx={{ display: 'flex', height: '100%', justifyContent:"center", alignItems:"center"}}>
                                    <img src={logoIvess} alt="Imagen" style={{ height: "80%", width: "80%" }} />
                                </Link>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={2} sx={{ display: { xs: 'none', sm: 'block' } ,order: {sm:3}}}>

                        <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', height:95}}>
                            <Button color="primary" variant="contained" sx={{height:"50%"}}>
                            <Link href="/ingresar" underline="none"sx={{height: '100%',display: 'flex', justifyContent: 'center',alignItems: 'center' }}>
                                <Typography color="white" variant="h7">
                                    Ser Cliente
                                </Typography>
                            </Link>
                            </Button>
                        </Box>   
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>

            <Drawer open={open} anchor="left" onClose={()=> setOpen(false)}>
            <NavList></NavList>
            </Drawer>
            
        </>
    )
    
}

export default Nav;

