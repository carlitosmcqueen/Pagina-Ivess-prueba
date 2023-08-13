import React from 'react';
import {Box} from "@mui/material";
const NotFound = () => {
  return (
    <Box sx={{marginTop:"10vh", height:"70vh"}}>
        <h1>404 - Página no encontrada</h1>
      <p>La página que estás buscando no existe.</p>
    </Box>
  );
}

export default NotFound;