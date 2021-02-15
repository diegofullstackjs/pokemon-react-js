import React from 'react';
import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import LinearProgress from "@material-ui/core/LinearProgress";
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme ) => ({
    cardRoot: {
      width: '100%',
      height:'400px'
    },
    divider: {
      marginTop: '10px',
      color: '#222831'
    },
    media: {
      width: '100%',
      height: '400px'
    },
    cardActionArea: {
      display: 'flex',
      flexDirection:'column',
      alignItems:'center'
    },
    progressToCenter: {
      paddingTop: '50vh'
    },
    titlePokemon: {
      alignSelf: 'flex-end',
      flex: 1
    },
    pokemonAbilities: {
      marginTop: '5px'
    },
    descriptionTitle: {
      color: "#30475e",
      flex: 1
    },
    root: {
      marginTop: '10px',
      display: 'grid'
    }
  }))
function ViewPokemon({
pokemon

}) {
  console.log(pokemon)
    const classes = useStyles();
  return (
      <div className={classes.root}>
          <Grid container spacing={3}>
           <Grid item sm={4}>
           <Card className={classes.cardRoot}>
           <CardMedia
                 component="img"
                 image={pokemon.image}
                 /> 
            <CardContent>
                <Typography variant="h5" component="h2" display="block" className={classes.titlePokemon}>
                </Typography>
            </CardContent>
            </Card>
           </Grid>
           <Grid item sm={8}>
           <Typography variant="h5" component="h2" display="block" className={classes.descriptionTitle}>
                  Caracteristicas
           </Typography>
            {
              pokemon.caracteristicas&&
               pokemon.caracteristicas.map((c) => (
                <Typography variant="subtitle2" component="p" display="block" className={classes.descriptionTitle}>
                  {c.flavor_text}
                </Typography>
               ))
            }
            <Divider />
           <Typography variant="h5" component="h2" display="block" className={classes.descriptionTitle}>
                  Habilidades
           </Typography>
           {
              pokemon.effect&&
               pokemon.effect.map((e) => (
                <Typography variant="subtitle2" component="p" display="block" className={classes.descriptionTitle}>
                  {e.effect}
                </Typography>
               ))
            }
           <Divider />
           {
              pokemon.location&&
               pokemon.location.map((e) => (
                <Typography variant="subtitle2" component="p" display="block" className={classes.descriptionTitle}>
                  {e}
                </Typography>
               ))
            }
           </Grid>
           </Grid>
      </div>
  )
}

export default ViewPokemon;