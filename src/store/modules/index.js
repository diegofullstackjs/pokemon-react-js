import {combineReducers} from 'redux';
import PokemonReducer,{otherState} from './pokemon/index.reducer'

export default combineReducers({
    pokemon: PokemonReducer,
    uniquePokemon: otherState
})