import {
  REQUEST_API_POKEMON,
  REQUEST_API_POKEMON_DETAILS,
  REQUEST_API_POKEMON_FAILURE,
  REQUEST_API_POKEMON_SUCCESS,
  REQUEST_DETAILS_POKEMON_FAILURE,
  REQUEST_DETAILS_POKEMON_REQUEST,
  REQUEST_DETAILS_POKEMON_SUCCESS
} from "./constant/";
const INITIAL_STATE = {
  count: null,
  next: null,
  previous: null,
  loading: false,
  error: false,
  pokemon: [],
  details: [],
};
const state = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API_POKEMON:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case REQUEST_API_POKEMON_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          count: action.payload.count,
          next: action.payload.next,
          previous: action.payload.previous,
          pokemon: action.payload.results
        }
      
    case REQUEST_API_POKEMON_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case REQUEST_API_POKEMON_DETAILS: 
      return {
        ...state,
        loading:false,
        error:false,
        details: [
          ...state.details,
          action.payload
        ]
      }
    default:
      return state;
  }
};

const INITAL_OTHER_STATE ={
   loading:false,
   error:false,
   abilities: [],
   location: [],
   caracteristicas:[],
   otherDetails:[]
}

export const otherState  =(state = INITAL_OTHER_STATE,action) => {
      switch(action.type){
         case REQUEST_DETAILS_POKEMON_REQUEST :
           return {
             ...state,
             error: false,
             loading: true
           }
         case REQUEST_DETAILS_POKEMON_SUCCESS: 
         return {
           ...state,
           loading: false,
           error: false,
           abilities: action.payload.abilities,
           location:action.payload.location,
           otherDetails:action.payload.otherDetails,
           caracteristicas: action.payload.caracteristicas
         }
         case REQUEST_DETAILS_POKEMON_FAILURE:  {
          return {
            ...state,
            error: true,
            loading: false
          }
         }
         default:  return state;
      }
}
export default state;
