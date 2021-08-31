import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import './Details.css';
import Trailer from './Trailer.js';
import { ImageListItemBar } from '@material-ui/core'
import { ImageListItem } from '@material-ui/core'
import { ImageList } from '@material-ui/core'
import Grid from "@material-ui/core/Grid";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Link } from 'react-router-dom';
import Header from '../../common/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary
  },
  paper: {
    maxHeight: 150
  }
}));


function changeColor(e) {
  if (e.target.style.fill !== "yellow") e.target.style.fill = "yellow";
  else e.target.style.fill = "black";
}


export default function Details(props) {

  const classes = useStyles();

  return (
    <div>
      <Header showBookMovieButton={true} baseUrl={props.baseUrl} loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}/>
      <div className="back"> 
        <Typography variant="body1" gutterBottom >
        <Link to="/"> {"< Back to Home"} </Link>
        </Typography>
       
      </div>
      <div className="flex-container">
        <div className="flex-child-left">
          <img src="https://collider.com/wp-content/uploads/inception-high-resolution-movie-poster-third.jpg" alt="Movie Poster" className="image" />
        </div>

        <div className="flex-child-middle">
          <Typography variant="h4" component="h2" gutterBottom>
            Inception
          </Typography>

          <br/>

          <Typography variant="body2" gutterBottom>
            <strong>Genre : </strong>
            <span>Action, Adventure, Sci-fi</span>
          </Typography>

          <Typography variant="body2" gutterBottom>
            <strong>Duration : </strong>
            <span>148</span>
          </Typography>

          <Typography variant="body2" gutterBottom>
            <strong> Release Date : </strong>
            <span>Fri July 16 2010</span>
          </Typography>

          <Typography variant="body2" gutterBottom>
            <strong> Rating : </strong>
            <span>8.8</span>
          </Typography>
          <br />
          <Typography variant="body2" gutterBottom>
            <strong> Plot : </strong>
            <span>
              (<a href="https://en.wikipedia.org/wiki/Inception">Wiki Link</a>) A
              thief, who steals corporate secrets through dream sharing technology,
              is given the inverse task of planting an idea into the mind of a CEO.
            </span>
          </Typography>
          <br />
          <Typography variant="body2" gutterBottom>
            <strong>Trailer : </strong>
          </Typography>
          <Trailer id="5EiV_HXIIGs" />
        </div>

        <div className="flex-child-right">

          <div className={classes.root}>
            <Typography>
              <strong>Rate this movie:</strong>
            </Typography>
            <StarBorderIcon className="star" onClick={changeColor} />
            <StarBorderIcon className="star" onClick={changeColor} />
            <StarBorderIcon className="star" onClick={changeColor} />
            <StarBorderIcon className="star" onClick={changeColor} />
            <StarBorderIcon className="star" onClick={changeColor} />
            <Typography className="artists">
              <strong>Artists:</strong>
            </Typography>
            <br />
            <Grid container className={classes.root} spacing={2}>

              <ImageList cols={2}>
                <ImageListItem key={0} className={classes.paper}>

                  <img
                    alt="actor"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2q9tvih6sHPAEEbPoCRrWpf2IWVG5IOo5jIxqCA7dgrggsQO5"
                    className={classes.paper}
                  />
                  <ImageListItemBar title="Leonardo Di Caprio" />
                </ImageListItem>

                <ImageListItem key={1} className={classes.paper}>
                  <img
                    alt="actor"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2q9tvih6sHPAEEbPoCRrWpf2IWVG5IOo5jIxqCA7dgrggsQO5"
                    className={classes.paper}
                  />
                  <ImageListItemBar title="Leonardo Di Caprio" />
                </ImageListItem>
              </ImageList>

            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
