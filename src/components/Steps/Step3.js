import React ,{useContext} from "react";
import {Button, TextField,Box} from "@mui/material"
import {contexto} from "../../components/Context/Context"


const ThirdStep = () =>{
    const {setStep,userData,setUserData,submitData} = useContext(contexto)

    return(
        <Box sx={{display: 'flex', flexDirection: 'column',height:"100%", width:"70%",justifyContent: 'space-around'}}>
            <Box>
                <TextField label="productos" value={userData["productos"]} onChange={(e)=> setUserData({...userData,"productos" : e.target.value})}  margin="normal" variant="filled" color="primary" sx={{ width: { xs: '90%', sm: '80%' }, marginBottom: '1rem' }}></TextField>
                {/* <TextField label="dato2" value={userData["dato2"]} onChange={(e)=> setUserData({...userData,"dato2" : e.target.value})} margin="normal" variant="filled" color="primary" sx={{ width: { xs: '90%', sm: '80%' }, marginBottom: '1rem' }}></TextField>
                <TextField label="dato3" value={userData["dato3"]} onChange={(e)=> setUserData({...userData,"dato3" : e.target.value})} margin="normal" variant="filled" color="primary" sx={{ width: { xs: '90%', sm: '80%' }, marginBottom: '1rem' }}></TextField> */}

            </Box>
            <Box display="flex" width="100%" justifyContent="space-around">
                <Button variant="contained" sx={{width:"200px"}} onClick={ ()=>setStep(2)} color="error">VOLVER</Button>
                <Button variant="contained" sx={{width:"200px"}} onClick={submitData} color="primary">LISTO</Button>
            </Box>
            
        </Box>

    )
  }
  
export default ThirdStep;