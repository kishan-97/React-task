import {makeStyles} from '@mui/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Box,InputBase} from '@mui/material';

const useStyle=makeStyles({
    input:{
        background:'rgb(238, 230, 254)',
        width:'100%',
      },
      inputcontainer:{
        display:'flex',
        flex:1,
        padding:'5px 10px',
        margin:'10px 0px 20px 0px',
        background:'rgb(238, 230, 254)',
        borderRadius:5
      },
      icon:{
        marginTop:2,
        color:'#7e42ef'
      },
})

const Input=({setFilter})=>{
    const classes=useStyle();

    const handlechange=(e)=>{
        setFilter(e.target.value);
    }
    return(
     <Box className={classes.inputcontainer}>
    <InputBase onChange={(e)=>handlechange(e)}className={classes.input} placeholder='See Your Financial Report' ></InputBase>
    <ArrowForwardIosIcon className={classes.icon}></ArrowForwardIosIcon>
    </Box>
    );
};

export default Input;