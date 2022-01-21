import {Box,Typography,Link} from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyle=makeStyles({
    container:{
        margin:'5px',
        display:'flex',
        flexDirection:'row',
        width:'100%'
},
    costContainer:{
        marginLeft:'auto'
    },
    time:{
        color:'#9ea3ad',
    }
});
const Card=({col})=>{
    const classes=useStyle();
    const val=50+Math.floor(Math.random()*150);
    
    let color=val>75 ? 'green' :'red';
    return(
        <>
        <Box className={classes.container}>
            <Box><img alt='img' style={{width:'50px',marginRight:'10px'}} src={col.thumbnailUrl}></img></Box>
            <Box>
                <Typography style={{fontWeight:500,marginBottom:2}}>{col.title}</Typography>
                <a href={col.url} style={{color:'#9ea3ad'}}>{col.url}</a>
            </Box>
            <Box className={classes.costContainer}>
                <Typography style={{color:color,fontSize:17,fontWeight:500}} className={classes.cost}>$ {val}</Typography>
                <Typography style={{fontSize:14}}className={classes.time}>10:00 AM</Typography>
            </Box>
        </Box>
        </>
    )
}

export default Card;

