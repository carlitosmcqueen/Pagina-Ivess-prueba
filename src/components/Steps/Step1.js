import React ,{useContext} from "react";
import {Button, TextField,Box} from "@mui/material"
import {contexto} from "../../components/Context/Context"
import Typography from "@mui/material/Typography";
import GoogleMaps from "../googleMaps/googleMaps"


const FirstStep = () =>{
    const {setStep,userData,setUserData,isNumberEntered} = useContext(contexto)
    const isNameFilled = userData["nombre"] && userData["apellido"];


    const handleApellidoChange =(e) =>{
        const inputValue = e.target.value;
        
        if(/^[^0-9]*$/.test(inputValue)){
            setUserData({...userData,"apellido":inputValue});
        }
    }
    
    const handleNombreChange = (e) => {
    const inputValue = e.target.value;
    if (/^[^0-9]*$/.test(inputValue)) {
      setUserData({ ...userData, "nombre": inputValue });
    }}

    return(
        <Box sx={{display: 'flex', flexDirection: 'column', width:{xs:"70",lg:"90%"}, justifyContent:"space-around", padding:"2rem"}}>
            <Box>
                <TextField required label="Nombre" inputProps={{ maxLength:30 }} value={userData["nombre"]} onChange={handleNombreChange} margin="normal" variant="filled" color="primary" sx={{ width:{ xs: '100%', sm: '90%' }, marginBottom: '1rem' }}></TextField>
                <TextField required label="Apellido" inputProps={{ maxLength:30 }} value={userData["apellido"]} onChange={handleApellidoChange} margin="normal" variant="filled" color="primary" sx={{ width:{ xs: '100%', sm: '90%' }, marginBottom: '1rem' }}></TextField>
                <Typography variant="h5">
                    Elija su Domicilio
                </Typography>

                <GoogleMaps sx={{backgroundColor:"red"}}></GoogleMaps>
            </Box>
            <Box>
            <Button variant="contained" disabled={!(isNameFilled && isNumberEntered)} sx={{ width: "200px" }} onClick={() => { if (isNameFilled && isNumberEntered) {setStep(2); }}}>
                SIGUIENTE</Button>
            </Box>
        </Box>

    )
  }
  
export default FirstStep;