import React from "react";
import Grid from "@mui/material/Grid";

import {Box,List,Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import ServicioPropiedades from "../../components/servicioPropiedades/servicioPropiedades";

const Main3 = () =>{
    return(
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <Box sx={{ padding: 3, display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="h4" fontWeight="bold" fontFamily='montserrat,sans-serif' textAlign="center">
                            ¿Como funciona el servicio?
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                    <List>
                        <ServicioPropiedades description="Acordamos un día y hora de la semana para visitarte" padding="3px"></ServicioPropiedades>
                        <ServicioPropiedades description="En cada visita decidís si comprar productos o no" padding="3px"></ServicioPropiedades>
                        <ServicioPropiedades description="La primer entrega la realizamos antes de las 24hs" padding="3px"></ServicioPropiedades>
                    </List>
                    </Box>
            </Grid>

            <Grid item xs={12} md={6}>
                    <Box>
                    <List>
                        <ServicioPropiedades description="Podés darte de alta o baja cuando quieras sin costo" padding="3px"></ServicioPropiedades>
                        <ServicioPropiedades description="Los envases y dispenser natural se entregan en comodato sin cargo" padding="3px"></ServicioPropiedades>
                        <ServicioPropiedades description="Aceptamos todos los medios de pago" padding="3px"></ServicioPropiedades>
                    </List>
                    </Box>
            </Grid>
    </Grid>

        </Container>
    
    )
}

export default Main3