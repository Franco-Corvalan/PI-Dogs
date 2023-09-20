import{
    GET_DOGS,
} from "./type";

const initialState = {
    dogs: []
};

const reducer = (state = initialState , actions) => {
    switch (actions.type){
        case GET_DOGS:
            return {
                ...state,
                dogs:actions.payload
            }

        default: 
        return state
    }
}

export default reducer;

