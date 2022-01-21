const initialState={
    albums:[],
    photos:[],
    loading:false
}

const albumnReducer=(state=initialState,action)=>{
    switch(action.type){
        case "addAlbums":return{
            ...state,
            albums:action.payload
        };
        case "addPhotos":return{
            ...state,
            photos:action.payload
        }
        default: return state;
    }
}


export default albumnReducer;