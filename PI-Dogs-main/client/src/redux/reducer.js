import{
    GET_DOGS,
    GET_ID,
    GET_NAME,
    FILTER_ORIGIN,
    FILTER_TEMP,
    GET_TEMPERAMENTS,
    ORDER_NAME,
    ORDER_WEIGHT,
    RESET,
} from "./type";

const initialState = {
    dogs: [],
    alldogs: [],
    dogsID:[],
    temperaments:[],
    reset: []
};

const reducer = (state = initialState , actions) => {
    switch (actions.type){
        case GET_DOGS:
            return {
                ...state,
                dogs:[...actions.payload],
                alldogs:[...actions.payload],
                reset:[...actions.payload]
            }
        
        case GET_ID:
            return {
                ...state,
                dogsID:actions.payload
            }
        
        case GET_NAME:
            return {
                ...state,
                dogs: [actions.payload]
            }
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: actions.payload
            }
        
        case FILTER_ORIGIN:
            let filterDogs = []
            if(actions.payload === "API"){
                filterDogs = state.alldogs.filter((elem) => typeof elem.id === 'number')
            }else if(actions.payload === "DB"){
                filterDogs = state.alldogs.filter((elem) => typeof elem.id === 'string')
            }else{
                filterDogs = [...state.alldogs]
            }
            return{
                ...state,
                dogs: [...filterDogs]
            }

        case ORDER_NAME: 
             return {
                ...state,
                dogs:[...state.dogs].sort((a,b) => 
                  actions.payload === 'ASC'
                  ? a.name.localeCompare(b.name)
                  : b.name.localeCompare(a.name)
                )
             }

        case ORDER_WEIGHT:
            let orderWeightFunction =
            actions.payload === 'ASC'
                ? (a, b) => { return Number(b.weight.split(" - ")[1]) - Number(a.weight.split(" - ")[1])} //ASC
                : (a, b) => { return Number(a.weight.split(" - ")[1]) - Number(b.weight.split(" - ")[1])} //DESC
        return {
            ...state,
            dogs: [...state.dogs.sort(orderWeightFunction)]   
            }
        
        default: 
        return state
    }
}

export default reducer;

