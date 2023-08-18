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
          height: '100vh',
        }}>
            <Grid container align="center" boxShadow={10} sx={{
                width: { xs: '100vw', sm: '60vw',md:"40vw"  },
                borderRadius: '15px',
                backgroundColor:"#ffffff",
                height:{xs:"100vh",sm:"60vh"},
            }}>
                <Grid item xs={12} sx={{
                    display:"flex",
                    alignItems:{xs:"end",sm:"center"},
                    justifyContent:"center",
                }}>
                    <Typography variant="h4" sx={{marginBottom:{xs:"10px",sm:"0px"}}}> Ingresa tus datos </Typography>
                </Grid>

                <Grid item xs={12} sx={{
                    padding:{xs:"0px 20px", md:"0px 30px"},
                    
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