import React from "react"
import {Box, ListItemIcon} from "@mui/material"
import {List, ListItem,ListItemText,ListItemButton,Button} from "@mui/material"
import CottageIcon from '@mui/icons-material/Cottage';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import InfoIcon from '@mui/icons-material/Info';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from "react-router-dom";

const NavList =()=>{

    const LinkNav=[
        {name: 'Home', id:1, path:'/',icon:<CottageIcon/>},
        {name: 'Ingresar', id:2,path: '/ingresar',icon:<LocalAtmIcon/>},
        {name:"Info", id:3,path:'/',icon:<InfoIcon/>}

    ];


    return(
        <Box sx={{width:250, height:"100%" ,display:"flex",flexDirection:"column", justifyContent:"space-between"}}>
            <nav>
                <List>

                {LinkNav.map((LinkNav) =><ListItem disablePadding key={LinkNav.id} >
                        <ListItemButton conponent="a" to={LinkNav.path} >
                            <ListItemIcon>
                                {LinkNav.icon}
                            </ListItemIcon>
                            <ListItemText alignItems="center" primary={LinkNav.name}></ListItemText>
                        </ListItemButton>
                    </ListItem>)}
                </List>
            </nav>

            <Box sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
            }}>
                <Link to="/">
                    <Button color="primary" variant="contained" style={{ margin:"10px",width:"200px"}}> <LocalPhoneIcon></LocalPhoneIcon>1231231231</Button>
                </Link>
                <Link to="/">
                <Button color="success" variant="contained" style={{ marginTop: '10px', marginBottom: '20px' , marginLeft: '10px', marginRight: '10px', width:"200px"}}><WhatsAppIcon></WhatsAppIcon> WhatsApp</Button>
                </Link>

            </Box>
            
        </Box>

    )
}

export default NavList