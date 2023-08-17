import React from "react";
import Grid from "@mui/material/Grid";

import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import IconCamion from "../../assets/icono-camion.svg";
import IconChanchito from "../../assets/icono-chanchito.svg";
import IconTrabajador from "../../assets/icono-trabajador.svg";
import PilaresIcon from "../../components/PilaresIcon/PilaresIcon";



const Main2 = () =>{



    return(
        <Container>
            <Grid container>
                <Grid item xs={12} sx={{ pt:"3rem"}}>
                    <Typography variant="h4" textAlign="center" fontFamily='montserrat,sans-serif' fontWeight="bold" >
                    ¿Porque elegirnos?
                    </Typography>
                    <Typography variant="h6" textAlign="center" fontFamily='montserrat,sans-serif' p="10px">
                    Nuestra trayectoria de excelencia, combinada con productos diseñados pensando en ti, garantiza que recibirás la calidad y el servicio que mereces
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={4} pt={3} sx={{padding:"20px"}}>
                    <PilaresIcon titulo="Practicidad" description="Elegí día y hora. Evitá cargar bolsas desde el supermercado" img={IconCamion}></PilaresIcon>
                </Grid>
                <Grid item xs={12} sm={4} pt={3} sx={{padding:"20px"}}>
                    <PilaresIcon titulo="Conveniencia" description="Garantía de cumplimiento y servicio de tu repartidor" img={IconChanchito}></PilaresIcon>
                </Grid>
                <Grid item xs={12} sm={4} pt={3} sx={{padding:"20px"}}>
                    <PilaresIcon titulo="Confianza" description="Menor precio por litro y sin costo de envío." img={IconTrabajador}></PilaresIcon>
                </Grid>
            </Grid>
             

        </Container>
    
    )
}

export default Main2