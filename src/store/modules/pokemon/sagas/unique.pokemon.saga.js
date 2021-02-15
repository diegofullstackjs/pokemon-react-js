import axios from 'axios'
import {all,call,put,takeEvery} from 'redux-saga/effects'
import {REQUEST_DETAILS_POKEMON_REQUEST} from '../constant/'
import {requestDetailsApiPokemonSuccess,requestAPIFailure} from '../actions'
function* fetchUniqueApi(action){
    if(action.name_pokemon){
        try{

            let caracteristicas = yield call(axios.get,`https://pokeapi.co/api/v2/pokemon-species/${action.name_pokemon}`)
            let mainDetails = yield call(axios.get,`https://pokeapi.co/api/v2/pokemon/${action.name_pokemon}`)
            let habilidades = yield call(axios.get,`https://pokeapi.co/api/v2/ability/${action.name_pokemon}/ `)
            let location = yield call(axios.get,`https://pokeapi.co/api/v2/pokemon/${action.name_pokemon}/encounters `)
             let  payload = {
                habilidades: habilidades.data,
                location: location.data,
                otherDetails: mainDetails.data ,
                caracteristicas: caracteristicas.data
            }
           
            yield put(requestDetailsApiPokemonSuccess(payload))
        }catch{
            yield put(requestAPIFailure)
        }
    }   
}
function* allSagas() {
    yield all([
        takeEvery(REQUEST_DETAILS_POKEMON_REQUEST,fetchUniqueApi)
    ])
}

export default allSagas;