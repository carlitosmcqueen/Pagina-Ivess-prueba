import React from 'react';
import { Container, Grid, Paper } from '@mui/material';

function App() {
  return (
    <Container>

      <Grid container>
        <Grid item xs={1} sx={{ backgroundColor: "red", width: "100%" }}>
          {/* Contenido de la columna */}
          <Paper>
            hola
          </Paper>
        </Grid>
        <Grid item xs={11} sx={{backgroundColor:"green"}}>
            <Paper>
                hola
            </Paper>
        </Grid>

      </Grid>
    </Container>
  );
}

export default App;
