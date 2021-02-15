import React from "react";
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles((theme) => ({
  cardRoot: {
    width: "100%",
    height: "auto",
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
    textAlign: "center",
  },
  pokemonAbilities: {
    marginTop: "5px",
  },
  descriptionTitle: {
    color: "#30475e",
    flex: 1,
  },
  root: {
    width:'90%',
    marginTop: "10px",
    display: "grid",
    margin:' 0 auto'
  },
}));
function ViewPokemon({ pokemon }) {
  React.useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);
  const { abilities, caracteristicas, otherDetails, location } = pokemon;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <Card className={classes.cardRoot}>
            {otherDetails.sprites !== undefined && (
              <CardMedia
                component="img"
                image={
                  otherDetails.sprites.other["official-artwork"].front_default
                }
              />
            )}
            <CardContent>
              {caracteristicas.name !== undefined && (
                <Typography
                  variant="h5"
                  component="h2"
                  display="block"
                  className={classes.titlePokemon}
                >
                  {caracteristicas.name}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={8}>
          <Typography
            variant="h3"
            display="block"
            className={classes.descriptionTitle}
          >
            Caracteristicas
          </Typography>
          {caracteristicas.flavor_text_entries !== undefined &&
            caracteristicas.flavor_text_entries.map((c, index) => {
              if (c.language.name === "en") {
                return (
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    display="block"
                    className={classes.descriptionTitle}
                    key={`caract-${Date.now() - index}`}
                  >
                    {c.flavor_text}
                  </Typography>
                );
              }
            })}
          <Divider />
          <Typography
            variant="h3"
            display="block"
            className={classes.descriptionTitle}
          >
            Habilidades
          </Typography>
          {abilities.effect_entries !== undefined &&
            abilities.effect_entries.map((h, index) => {
              if (h.language.name === "en")
                return (
                  <Typography
                    variant="subtitle1" 
                    gutterBottom
                    display="block"
                    className={classes.descriptionTitle}
                    key={`poder-${Date.now() - index}`}
                  >
                    {h.effect}
                  </Typography>
                );
            })}
          <Divider />
          <Typography
            variant="h3"
            display="block"
            className={classes.descriptionTitle}
          >
            localização
          </Typography>
          {
            location !== undefined &&
             location.map((lo,index) => {
              return (
                <Typography
                  variant="subtitle1" 
                  gutterBottom
                  display="block"
                  className={classes.descriptionTitle}
                  key={`poder-${Date.now() - index}`}
                >
                  {lo.location_area.name}
                </Typography>
              );
             })
          }
          
        </Grid>
      </Grid>
    </div>
  );
}
ViewPokemon.propTypes = {
  pokemon: PropTypes.any,
};
export default ViewPokemon;
