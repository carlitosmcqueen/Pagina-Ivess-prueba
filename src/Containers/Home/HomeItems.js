import { Paper } from "@mui/material";

function HomeItem ({item})
{
    return (
        <Paper sx={{display:"flex", alignItems:"center", justifyContent: "center"}}>
            <img src={item.image} alt={item.title} style={{height:"30vh", width:"27vw"}}></img>
        </Paper>
    )
}

export default HomeItem