import React from "react";
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from 'prop-types';
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles((theme) => ({
  cardRoot: {
    width: "100%",
    height: "400px",
  },
  divider: {
    marginTop: "10px",
    color: "#222831",
  },
  media: {
    width: "100%",
    height: "400px",
  },
  cardActionArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  progressToCenter: {
    paddingTop: "50vh",
  },
  titlePokemon: {
    alignSelf: "flex-end",
    flex: 1,
  },
  pokemonAbilities: {
    marginTop: "5px",
  },
  descriptionTitle: {
    color: "#30475e",
    flex: 1,
  },
  root: {
    marginTop: "10px",
    display: "grid",
  },
}));
function ViewPokemon({ pokemon }) {
  React.useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);
  const { abilities, caracteristicas,otherDetails,location } = pokemon;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <Card className={classes.cardRoot}>
            {
              otherDetails.sprites !== undefined &&
              <CardMedia component="img"
               image={otherDetails.sprites.other['official-artwork'].front_default}
              />
            }
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                display="block"
                className={classes.titlePokemon}
              ></Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={8}>
          <Typography
            variant="h5"
            component="h2"
            display="block"
            className={classes.descriptionTitle}
          >
            Caracteristicas
          </Typography>
          {caracteristicas.flavor_text_entries !== undefined &&
            caracteristicas.flavor_text_entries.map((c) => {
              if (c.language.name === "en") {
                return (
                  <Typography
                    variant="p"
                    component="li"
                    display="block"
                    className={classes.descriptionTitle}
                  >
                    {c.flavor_text}
                  </Typography>
                );
              }
            })}
          <Divider />
          <Typography
            variant="h5"
            component="h2"
            display="block"
            className={classes.descriptionTitle}
          >
            Habilidades
          </Typography>
          {abilities.effect_entries !== undefined &&
            abilities.effect_entries.map((h) => {
              if(h.language.name === 'en')
            return  <Typography
                variant="p"
                component="li"
                display="block"
                className={classes.descriptionTitle}
              >
                {h.effect}
              </Typography>
            })
          }
          <Divider />
        </Grid>
      </Grid>
    </div>
  );
}
ViewPokemon.propTypes = {
  pokemon: PropTypes.any
}
export default ViewPokemon;
