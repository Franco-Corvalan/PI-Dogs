import{
    GET_DOGS,
    GET_ID
} from "./type";

const initialState = {
    dogs: [],
    alldogs: [],
    dogsID:[]
};

const reducer = (state = initialState , actions) => {
    switch (actions.type){
        case GET_DOGS:
            return {
                ...state,
                dogs:actions.payload,
                alldogs:actions.payload
            }
        
        case GET_ID:
            return {
                ...state,
                dogsID:actions.payload
            }
        default: 
        return state
    }
}

export default reducer;

