import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestAPI } from "../../store/modules/pokemon/actions";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import CustomCardMUI from "../../components/Card";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
  },
  toCenter: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
  },
  Pagination: {
    width: "100%",
  },
}));
function Home() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.pokemon);
  const paginate = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (state.loading) {
        return window.screenTop(0);
      } else {
        dispatch(requestAPI());
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", paginate);
    return () => window.removeEventListener('scroll',paginate)
  }, []);

  useEffect(() => {
    dispatch(requestAPI());
  }, [dispatch]);
  return (
    <>
      {state.loading && (
        <Container styles={styles.root}>
          <LinearProgress />
        </Container>
      )}
      {state.pokemon.length > 0 && (
        <Container styles={styles.root}>
          <Grid container spacing={3}>
            {state.pokemon.map((el, index) => {
              const filter = state.details.filter((f) => f.name === el.name);
              return (
                <Grid item sm={3} key={el.name + "-" + index}>
                  {filter.map((data) => (
                    <CustomCardMUI
                      title={el.name}
                      Id={data.id}
                      image={data.sprites.other['official-artwork'].front_default}
                      key={index.toString()}
                    />
                  ))}
                </Grid>
              );
            })}
          </Grid>
        </Container>
      )}
    </>
  );
}

export default Home;
