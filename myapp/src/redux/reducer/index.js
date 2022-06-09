const initialState = {
    tarjetas: []
}


export default function rootReducer (state=initialState, {type,payload}){
    switch(type){
        case "GET_TARJETAS_VIDEOGAMES":
            return{
                ...state,
                tarjetas: payload,
            }
        case 'GET_TARJETAS_SUP':
            return{
                ...state,
                tarjetas: payload,
            }
        default:
            return {...state}
    }
}

