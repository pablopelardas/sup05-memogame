import axios from 'axios'


export function getTarjetasSup(){
    return async (dispatch) => {
        return axios.get('http://localhost:3001/sup')
            .then (response => dispatch({type:'GET_TARJETAS_SUP', payload: response.data}))
            .catch(e => console.log(e))
    }   
}


	// localhost:3001/videogames
	// localhost:3001/sup

 export function getTarjetasVideogames(){
    return async function (dispatch){
        return fetch('http://localhost:3001/videogames')
                .then(response => response.json())
                .then(videogames => dispatch({type: "GET_TARJETAS_VIDEOGAMES", payload: videogames}))
                .catch(error => console.log(error))
    }
} 