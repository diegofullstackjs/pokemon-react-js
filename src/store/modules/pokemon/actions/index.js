import { 
    REQUEST_API_POKEMON, 
    REQUEST_API_POKEMON_DETAILS, 
    REQUEST_API_POKEMON_FAILURE, 
    REQUEST_API_POKEMON_SUCCESS,
    REQUEST_DETAILS_POKEMON_REQUEST,
    REQUEST_DETAILS_POKEMON_SUCCESS
 } from "../constant"


export const requestAPI =  () => {
    return {
        type: REQUEST_API_POKEMON
    }
}

export const requestAPISucess = (data,offset) => {
    console.log(offset)
    return {
        type: REQUEST_API_POKEMON_SUCCESS,
        payload: data,
        offset: offset
    }
}

export const requestAPIDetails = (data) => {
    return {
        type: REQUEST_API_POKEMON_DETAILS,
        payload:data
    }
}

export const requestAPIFailure = () => {
    return {
        type: REQUEST_API_POKEMON_FAILURE,
    }
}


/* details action for pokemon */

export const requestDetailsApiPokemon = (name) =>{
    console.log(name)
     return {
         type: REQUEST_DETAILS_POKEMON_REQUEST,
         name_pokemon: name
     }
}
export const requestDetailsApiPokemonSuccess = (data) =>{
    return {
        type: REQUEST_DETAILS_POKEMON_SUCCESS,
        payload: {
            abilities: data.habilidades,
            location:data.location,
            otherDetails: data.otherDetails,
            caracteristicas: data.caracteristicas
        }
    }
}