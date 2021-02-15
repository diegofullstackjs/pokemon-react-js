import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {requestDetailsApiPokemon} from '../../store/modules/pokemon/actions'
import LinearProgress from "@material-ui/core/LinearProgress";
import ListPokemon from '../../components/ViewPokemon'

function Pokemon() {
  const history = useHistory()
   const state = useSelector(state => state.uniquePokemon) 
    const {parameter} = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
      console.log(parameter)
      dispatch(requestDetailsApiPokemon(parameter))
    },[dispatch,parameter])
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