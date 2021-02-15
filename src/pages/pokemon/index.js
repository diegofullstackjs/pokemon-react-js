import React, { useEffect,useState } from 'react';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {requestDetailsApiPokemon} from '../../store/modules/pokemon/actions'
import LinearProgress from "@material-ui/core/LinearProgress";
import ListPokemon from '../../components/ViewPokemon'

function Pokemon() {
    const {parameter} = useParams();
    const [pokemon,setPokemon] = useState({
      location:  [],
      caracteristicas: []
    })
    const state = useSelector(state => state.uniquePokemon)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(requestDetailsApiPokemon(parameter))
    },[dispatch])
    useEffect(() => {
      if(state.loading !== false){
        const effect = state.abilities.effect_entries.filter(e => e.language.name === 'en')
        const img = state.otherDetails.sprites.other["official-artwork"].front_default
        const location = state.location_area_encounters.map(e => e.location_area.name)
        const captureRate = state.caracteristicas.base_happiness;
        const caracteristicas = state.caracteristicas.flavor_text_entries.filter(c => c.language.name === 'en')
        setPokemon({
          effect: effect,
          caracteristicas: caracteristicas,
          location: location,
          image: img
        })
      }
    },[state])
  return (
    <>
    { 
      state.loading ?
      <LinearProgress />
      : 
      <ListPokemon pokemon={pokemon} />
     }
   
    </>
  )
}

export default Pokemon;