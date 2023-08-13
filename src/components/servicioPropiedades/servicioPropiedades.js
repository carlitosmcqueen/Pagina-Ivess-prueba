import {ListItem} from "@mui/material";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';





const ServicioPropiedades =({description})=>{
    return(
        <ListItem sx={{ display: 'flex', justifyContent: 'start', height: '10vh'}}>
            <FiberManualRecordIcon sx={{
                fontSize: '16px', 
                marginRight: '8px',       
                color: 'primary.main',    
                }} />
                <Typography variant='h6'>
                    {description}
                </Typography>
        </ListItem>

    )
}

export default ServicioPropiedades