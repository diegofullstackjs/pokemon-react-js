import { all } from 'redux-saga/effects'
import Saga from './pokemon/sagas/saga'
import DetailSaga from './pokemon/sagas/unique.pokemon.saga'
function* rootSaga() {
     yield all([
          Saga(),
          DetailSaga()
     ])
}
export default rootSaga