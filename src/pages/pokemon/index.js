import React, { useEffect,useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {requestDetailsApiPokemon} from '../../store/modules/pokemon/actions'
import LinearProgress from "@material-ui/core/LinearProgress";
import ListPokemon from '../../components/ViewPokemon'

function Pokemon() {
   const state = useSelector(state => state.uniquePokemon) 
    const {parameter} = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(requestDetailsApiPokemon(parameter))
    },[dispatch])
    useEffect(() => {

    },[state])
  return (
    <>
    { 
      state.loading ?
      <LinearProgress />
      : 
      <ListPokemon 
      pokemon={state} 
      />
     }
   
    </>
  )
}

export default Pokemon;