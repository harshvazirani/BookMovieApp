import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { ImageListItemBar } from '@material-ui/core'
import { ImageListItem } from '@material-ui/core'
import './Home.css';
import Header from '../../common/Header';
import FilteredMovies from "./FilteredMovies";

const useStyles = makeStyles((theme) => ({
    paper: {

        maxHeight: 250,
        marginLeft: 2,
        marginRight: 2
    }
}));


const Home = function (props) {
    const [title, setTitle] = useState("Inception");
    const [poster_url, setPosterUrl] = useState("https://collider.com/wp-content/uploads/inception-high-resolution-movie-poster-third.jpg");
    const classes = useStyles();

    return (
        <div>
            <div>
                <Header showBookMovieButton={false} baseUrl={props.baseUrl} loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
            </div>
            <div className="redheader">
                <center><span className="heading"><strong>Upcoming Movies</strong></span></center>
            </div>
            <div className="movielist">
                <div className="grid">
                    <ImageListItem key={0} className={classes.paper}>
                        <img
                            alt="actor"
                            src={poster_url}
                            className={classes.paper}
                        />
                        <ImageListItemBar title={title} />
                    </ImageListItem>
                    <ImageListItem key={1} className={classes.paper}>
                        <img
                            alt="actor"
                            src={poster_url}
                            className={classes.paper}
                        />
                        <ImageListItemBar title={title} />
                    </ImageListItem>
                    <ImageListItem key={2} className={classes.paper}>
                        <img
                            alt="actor"
                            src={poster_url}
                            className={classes.paper}
                        />
                        <ImageListItemBar title={title} />
                    </ImageListItem>
                    <ImageListItem key={3} className={classes.paper}>
                        <img
                            alt="actor"
                            src={poster_url}
                            className={classes.paper}
                        />
                        <ImageListItemBar title={title} />
                    </ImageListItem>
                    <ImageListItem key={4} className={classes.paper}>
                        <img
                            alt="actor"
                            src={poster_url}
                            className={classes.paper}
                        />
                        <ImageListItemBar title={title} />
                    </ImageListItem>
                    <ImageListItem key={5} className={classes.paper}>
                        <img
                            alt="actor"
                            src={poster_url}
                            className={classes.paper}
                        />
                        <ImageListItemBar title={title} />
                    </ImageListItem>
                    <ImageListItem key={6} className={classes.paper}>
                        <img
                            alt="actor"
                            src={poster_url}
                            className={classes.paper}
                        />
                        <ImageListItemBar title={title} />
                    </ImageListItem>
                </div>
            </div>
            <FilteredMovies />
        </div>
    )
}

export default Home;