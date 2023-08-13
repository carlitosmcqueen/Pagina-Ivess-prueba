import React,{useContext} from 'react';
import "./FormSteps.css";
import FirstStep from "../../components/Steps/Step1"
import SecondStep from "../../components/Steps/Step2"
import ThirdStep from "../../components/Steps/Step3"


import Grid from "@mui/material/Grid";
import {Box,Stepper,StepLabel,Step} from "@mui/material"
import {contexto} from "../../components/Context/Context"

import Typography from "@mui/material/Typography";


const Form = () =>{

    const {currentStep} = useContext(contexto)


    function showStep(step) {
        switch(step){
            case 1 : 
            return <FirstStep></FirstStep>
            case 2 :
                return <SecondStep></SecondStep>
            case 3 :
                return <ThirdStep></ThirdStep>
            default:
                return <FirstStep></FirstStep>
        }
    }
    

    return(
        <Box
        sx={{
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        backgroundImage:`url(https://www.somoselagua.com.ar/img/bg-ivess.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100vh',
        }}>
        <Grid container align="center" boxShadow={10} sx={{
            width: { xs: '100vw', sm: '60vw',md:"40vw"  },
            marginTop:"10vh",
            borderRadius: '15px',
            backgroundColor:"#ffffff",
            height:{xs:"109vh",sm:"70vh"},
        }}>
            <Grid item xs={12} sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                
            }}>
                <Typography variant="h4"> Ingresa tus datos </Typography>
            </Grid>

            <Grid item xs={12} sx={{
                padding:{xs:"10px 20px", md:"20px 30px"},
                
            }}>
                <Stepper activeStep={currentStep -1 } orientation="horizontal">
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                
                </Stepper>
                {showStep(currentStep)}
                
            </Grid>
        
        </Grid>

        </Box>
        
    )
  }
  
export default Form;