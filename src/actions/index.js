import axios from 'axios';

const addAlbums=(albums)=>{
    return{
        type:'addAlbums',
        payload:albums
    }
}

const addPhotos=(photos)=>{
    return{
        type:'addPhotos',
        payload:photos
    }
}


export const fetchAlbums=()=>{
    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(res=>{
            const albums=res.data;
            dispatch(addAlbums(albums));
        })
        .catch(e=>{
            console.log(e);
        });
    }
}

export const fetchPhotos=()=>{
    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res=>{
            const photos=res.data;
            dispatch(addPhotos(photos));
        })
        .catch(e=>{
            console.log(e);
        });
    }
}