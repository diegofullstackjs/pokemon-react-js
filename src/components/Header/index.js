import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "5px",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    background: "#f05454",
  },
  title: {
    flexGrow: 1,
    color: "#fff",
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            POKEMON HISTORY
          </Typography>
          <div className={classes.grod} />
          <Link href="https://github.com/diegofullstackjs/pokemon-react-js" color="inherit">
          <IconButton
            color="inherit"
          >
            <GitHubIcon />
          </IconButton>
          </Link>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
