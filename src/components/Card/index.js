import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { CardContent,CardActions,Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
      },
      media: {
        height: 140,
      },
      toCenter: {
          justifyContent:'center',
          alignItems:'center'
      }
}))
function CustomCardMUI({image,content,title,Id}) {
    const classes = useStyles();
    const url = `pokemon/${title}/${Id}`
  return (
      <Card className={classes.root}> 
        <CardActionArea>
            <CardMedia
            height="300"
            component="img"
            alt={title}
            image={image}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             {title}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions className={classes.toCenter}>
        <Button size="small" component={Link} to={url} color="primary">
          Visualizar Pokemon
        </Button>
        </CardActions>
      </Card>
  )
}

export default CustomCardMUI;