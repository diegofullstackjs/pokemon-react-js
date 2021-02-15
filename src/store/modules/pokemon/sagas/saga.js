import axios from 'axios'
import {call,all, put, select,delay, takeLatest} from 'redux-saga/effects'
import { requestAPIFailure, requestAPISucess,requestAPIDetails } from '../actions'
import { REQUEST_API_POKEMON } from '../constant'

function* getPokemonData(pokemon) {
    try {
        let currentPage = yield `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        let response = yield call(axios.get,currentPage)
        yield put(requestAPIDetails(response.data))
    }catch{
        yield put(requestAPIFailure())
    }
}
function* fetchApi() {
    yield console.log("SAGA")
    try {
       let state = yield select(state => state.pokemon)
       let currentUrl = yield state.next? state.next : 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
       let response = yield call(axios.get,currentUrl)
       yield delay(1000)

       yield put(requestAPISucess(response.data))

       for(const item of response.data.results){
          yield call(getPokemonData,item.name)
       }
    }catch{
        yield put(requestAPIFailure())
    }
}


/*SAGAS REQUES DETAILS OF POKEMON  */

function* allSagas() {
    yield all([
        takeLatest(REQUEST_API_POKEMON,fetchApi)
    ])
}

export default allSagas;