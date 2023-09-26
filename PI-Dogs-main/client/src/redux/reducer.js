import{
    GET_DOGS,
    GET_ID,
    GET_NAME,
    FILTER_ORIGIN,
    FILTER_TEMP,
    GET_TEMPERAMENTS,
    ORDER_NAME,
    ORDER_WEIGHT,
    NEXT,
    PREV,
    RESET,
    CREATE_DOG
} from "./type";

const initialState = {
    dogs: [],
    alldogs: [],
    dogsID:[],
    temperaments:[],
    reset: [],
    pagNum:1
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
                dogs: [actions.payload],
                pagNum:1,
            }
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: actions.payload,
                pagNum:1
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
                dogs: [...filterDogs],
                pagNum:1
            }

        case ORDER_NAME: 
            return {
                ...state,
                dogs:[...state.dogs].sort((a,b) => 
                  actions.payload === 'ASC'
                  ? a.name.localeCompare(b.name)
                  : b.name.localeCompare(a.name)
                ),
                alldogs:[...state.alldogs].sort((a,b) => 
                  actions.payload === 'ASC'
                  ? a.name.localeCompare(b.name)
                  : b.name.localeCompare(a.name)
                ),
                pagNum:1
            }

        case ORDER_WEIGHT:
            let orderWeight =
            actions.payload === 'ASC'
                ? (a, b) => { return Math.round(Number(b.weight.split(" - ")[1]) - Number(a.weight.split(" - ")[1]))} //ASC
                : (a, b) => { return Math.round(Number(a.weight.split(" - ")[1]) - Number(b.weight.split(" - ")[1]))} //DESC
        return {
            ...state,
            dogs: [...state.dogs.sort(orderWeight)],
            alldogs:[...state.dogs.sort(orderWeight)],
            pagNum:1
            }
        
        case FILTER_TEMP:
            return {
                ...state,
                dogs: [...state.alldogs].filter((d) => d.temperament && d.temperament.includes(actions.payload)),
                pagNum:1
            }
        
        case RESET:
            return {
                ...state,
                dogs: [...state.reset]
            }
        
        case NEXT:
            return{
                ...state,
                pagNum: state.pagNum + 1
            }
        
        case PREV:
            return {
                ...state,
                pagNum: state.pagNum -1
            }

        case CREATE_DOG:
            return {
                ...state,
                dogs:[actions.payload, ...state.dogs],
                alldogs:[...state.alldogs,actions.payload]
            }
        default: 
        return state
    }
}

export default reducer;

