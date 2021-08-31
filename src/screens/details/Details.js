import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import './Details.css';
import { ImageListItemBar } from '@material-ui/core'
import { ImageListItem } from '@material-ui/core'
import { ImageList } from '@material-ui/core'
import Grid from "@material-ui/core/Grid";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Link } from 'react-router-dom';
import Header from '../../common/Header';
import YouTube from 'react-youtube';

function onReady(e) {
  e.target.pauseVideo();
}

const opts = {
  height: '507',
  width: '900',
  playerVars: {
    autoplay: 1,
  },
};

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
  const [title, setTitle] = useState("Inception");
  const [poster_url, setPosterUrl] = useState("https://collider.com/wp-content/uploads/inception-high-resolution-movie-poster-third.jpg");
  const [genres, setGenres] = useState("Action, Adventure, Sci-fi");
  const [duration, setDuration] = useState("148");
  const [release_date, setReleaseDate] = useState("Fri July 16 2010");
  const [critics_rating, setCriticsRating] = useState("8.8");
  const [wiki_url, setWikiUrl] = useState("https://en.wikipedia.org/wiki/Inception");
  const [story_line, setStoryLine] = useState(`A
  thief, who steals corporate secrets through dream sharing technology,
  is given the inverse task of planting an idea into the mind of a CEO.`);
  const [trailer_url, setTrailerUrl] = useState("5EiV_HXIIGs");

  const [profile_url, setProfileUrl] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2q9tvih6sHPAEEbPoCRrWpf2IWVG5IOo5jIxqCA7dgrggsQO5");
  const [first_name, setFirstName] = useState("Leonardo");
  const [last_name, setLastName] = useState("Di Caprio");
  const classes = useStyles();

  return (
    <div>
      <Header showBookMovieButton={true} baseUrl={props.baseUrl} loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />

      <div className="back">
        <Link to="/">
          <Typography variant="body1" gutterBottom >
            {"< Back to Home"}
          </Typography>

        </Link>
      </div>

      <div className="flex-container">
        <div className="flex-child-left">
          <img src={poster_url} alt="Movie Poster" className="image" />
        </div>

        <div className="flex-child-middle">
          <Typography variant="h4" component="h2" gutterBottom>
            {title}
          </Typography>

          <Typography variant="body2" gutterBottom>
            <strong>Genre : </strong>
            <span>{genres}</span>
          </Typography>

          <Typography variant="body2" gutterBottom>
            <strong>Duration : </strong>
            <span>{duration}</span>
          </Typography>

          <Typography variant="body2" gutterBottom>
            <strong> Release Date : </strong>
            <span>{release_date}</span>
          </Typography>

          <Typography variant="body2" gutterBottom>
            <strong> Rating : </strong>
            <span>{critics_rating}</span>
          </Typography>

          <div className="plot">
            <Typography variant="body2" gutterBottom>
              <strong> Plot : </strong>
              <span>
                (<a href={wiki_url} className="wiki_link">Wiki Link</a>) {story_line}
              </span>
            </Typography>
          </div>

          <div className="video">
            <Typography variant="body2" gutterBottom>
              <strong>Trailer : </strong>
            </Typography>
            <YouTube videoId={trailer_url} opts={opts} onReady={onReady} />
          </div>
        </div>

        <div className="flex-child-right">

          <div>
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
            <Grid container spacing={2} className="artists-grid">

              <ImageList cols={2}>
                <ImageListItem key={0} className={classes.paper}>

                  <img
                    alt="actor"
                    src={profile_url}
                    className={classes.paper}
                  />
                  <ImageListItemBar title={`${first_name} ${last_name}`} />
                </ImageListItem>

                <ImageListItem key={1} className={classes.paper}>
                  <img
                    alt="actor"
                    src={profile_url}
                    className={classes.paper}
                  />
                  <ImageListItemBar title={`${first_name} ${last_name}`} />
                </ImageListItem>
              </ImageList>

            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
