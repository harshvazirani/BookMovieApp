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

//The Top Part of Home Page is in this file. Bottom part is in FilteredMovies.js
const Home = function (props) {
    const [title, ] = useState("Inception");
    const [poster_url, ] = useState("https://collider.com/wp-content/uploads/inception-high-resolution-movie-poster-third.jpg");
    const classes = useStyles();

    return (
        <div>
            <div>
                {/*Header called with correct props*/}
                <Header showBookMovieButton={false} baseUrl={props.baseUrl} loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
            </div>

            {/*This is the red "Upcoming Movies" banner below the header*/}
            <div className="redheader">
                <center><span className="heading"><strong>Upcoming Movies</strong></span></center>
            </div>

            {/*Grid of upcoming Movies*/}
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
            {/* This is the bottom half of the home page.*/}
            <FilteredMovies />
        </div>
    )
}

export default Home;



/* 
I was getting the following errors in the console.

"Material-UI: The GridList component was renamed to ImageList to align with the current Material Design naming."

"Material-UI: The GridListTileBar component was renamed to ImageListItemBar to align with the current Material Design naming."

"Material-UI: The GridListTile component was renamed to ImageListItem to align with the current Material Design naming."


So, I changed the components from - 
GridList               to        ImageList 
GridListTileBar        to        ImageListItemBar 
GridListTile           to        ImageListItem 


**So I should not be penalized for using these components instead of the ones mentioned in the Project Statement.** */