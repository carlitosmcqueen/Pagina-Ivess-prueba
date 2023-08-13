
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";


const PilaresIcon =({titulo,description,img})=>{
    return(
        <>
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                }}
                ><img src={img} alt="camion" height="120"/>
            </Box>
            <Typography variant="h5" align="center" fontFamily='montserrat,sans-serif' fontWeight="bold">
            {titulo}
            </Typography>
            <Typography variant="h7"  component="h4" align="center"  fontFamily='montserrat,sans-serif' padding="10px 30px">
            {description}
            </Typography>
        </>
        

    )
}

export default PilaresIcon