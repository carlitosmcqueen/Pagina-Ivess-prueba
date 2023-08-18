import React ,{useContext} from "react";
import {Button, TextField,Box} from "@mui/material"
import {contexto} from "../../components/Context/Context"
import Typography from "@mui/material/Typography";



const SecondStep = () =>{
    const {setStep,userData,setUserData} = useContext(contexto)

    const handlePisoChange = (e) => {
        const inputValue = e.target.value;
        if (/^[0-9]*$/.test(inputValue) && inputValue.length <= 3) {
          setUserData({ ...userData, "piso": inputValue });
        }
      };

    return(
        <Box sx={{display: 'flex', flexDirection: 'column', width:{xs:"70",lg:"90%"}, justifyContent: 'space-around'}}>
            <Box>
                <Typography variant="h6">
                    Su domicilio:
                </Typography>
                <Typography variant="h6" >
                    {userData.domicilio}
                </Typography>
                <Typography variant="h7" color="#ff0000">
                    Si es un departamento llene los cuadros 
                </Typography>
                <TextField label="Piso: PB o N°" type="number" InputProps={{min:0}} value={userData["piso"]} onChange={handlePisoChange} margin="normal" variant="filled" color="primary" sx={{ width: { xs: '90%', sm: '80%' }, marginBottom: '1rem' }}></TextField>
                <TextField label="Departamento: Letra o N°"  inputProps={{ maxLength:5 }} value={userData["departamento"]} onChange={(e)=> setUserData({...userData,"departamento" : e.target.value})} margin="normal" variant="filled" color="primary" sx={{ width: { xs: '90%', sm: '80%' }, marginBottom: '1rem' }}></TextField>
                <TextField label="¿Alguna aclaracion especial?" inputProps={{ maxLength:50 }} value={userData["aclaracion"]} onChange={(e)=> setUserData({...userData,"aclaracion" : e.target.value})} margin="normal" variant="filled" color="primary" sx={{ width:{ xs: '90%', sm: '80%' }, marginBottom: '1rem' }}></TextField>
            </Box>
            <Box display="flex" width="100%" justifyContent="center">
                <Button variant="contained" sx={{width:"200px"}} onClick={ ()=>setStep(1)} color="error">VOLVER</Button>
                <Button variant="contained" sx={{width:"200px"}} onClick={ ()=>setStep(3)} color="primary">SIGUIENTE</Button>
            </Box>
        </Box>

    )
  }
  
export default SecondStep;