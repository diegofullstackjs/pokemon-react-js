import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import combineReducer from './modules'
import createLogger from 'redux-logger'
import rootSaga from './modules/rootSaga';
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['pokemon']
}
const persistedReducer = persistReducer(persistConfig,combineReducer)
const sagaMidleware = createSagaMiddleware();
const middleware = [sagaMidleware,createLogger]

const store = createStore(persistedReducer,applyMiddleware(...middleware))
const persistor = persistStore(store)
sagaMidleware.run(rootSaga)
export {store,persistor}