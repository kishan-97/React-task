import {useSelector,useDispatch} from 'react-redux';
import {fetchAlbums,fetchPhotos} from './actions/index';
import {useEffect,useState} from 'react';
import {Box,Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import Card from './components/Card';
import Input from './components/Input';

const useStyle=makeStyles({
  app:{
    margin:'2px 130px',
    ['@media(max-width: 1280px)']:{
      margin:'0'
  },
  },
  title:{
    margin:10
  }
})

function App() {
  const {albums,photos}=useSelector((state)=>state);
  const dispatch=useDispatch();
  console.log(albums,photos);
  
  useEffect(()=>{
    dispatch(fetchAlbums());
    dispatch(fetchPhotos());
  },[]);

  const classes=useStyle();
 
  const [filter,setFilter]=useState('');

  return (
    <div className={classes.app}>
   
    <Input setFilter={setFilter}></Input>
    {
      albums && photos && albums.slice(0,5).map(row=>{
        return (
        <Box>
        {
        photos.filter(item=>item.albumId===row.id && (filter ? item.title.includes(filter):1)).length ? 
         <> 
        <Typography variant='h5' className={classes.title}>{row.title}</Typography>
        {      
          photos.filter(item=>item.albumId===row.id && (filter ? item.title.includes(filter):1)).slice(0,10).map(col=>{
            return <Card col={col}></Card>
          })
        }
        </>:
        <></>
        }
        </Box>
        )
      })
    }
    </div>
  );
}

export default App;
