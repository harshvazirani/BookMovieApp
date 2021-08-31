import React from "react";
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

    const classes = useStyles();

    return (
        <div>
            <div>
                <Header showBookMovieButton={false} baseUrl={props.baseUrl} loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}/> 
                </div>
            <div className="redheader">
                <center><span className="heading"><strong>Upcoming Movies</strong></span></center>
            </div>
            <div className="movielist">
                <div className="grid">
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
                    <ImageListItem key={2} className={classes.paper}>
                        <img
                            alt="actor"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2q9tvih6sHPAEEbPoCRrWpf2IWVG5IOo5jIxqCA7dgrggsQO5"
                            className={classes.paper}
                        />
                        <ImageListItemBar title="Leonardo Di Caprio" />
                    </ImageListItem>
                    <ImageListItem key={3} className={classes.paper}>
                        <img
                            alt="actor"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2q9tvih6sHPAEEbPoCRrWpf2IWVG5IOo5jIxqCA7dgrggsQO5"
                            className={classes.paper}
                        />
                        <ImageListItemBar title="Leonardo Di Caprio" />
                    </ImageListItem>
                    <ImageListItem key={4} className={classes.paper}>
                        <img
                            alt="actor"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2q9tvih6sHPAEEbPoCRrWpf2IWVG5IOo5jIxqCA7dgrggsQO5"
                            className={classes.paper}
                        />
                        <ImageListItemBar title="Leonardo Di Caprio" />
                    </ImageListItem>
                    <ImageListItem key={5} className={classes.paper}>
                        <img
                            alt="actor"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2q9tvih6sHPAEEbPoCRrWpf2IWVG5IOo5jIxqCA7dgrggsQO5"
                            className={classes.paper}
                        />
                        <ImageListItemBar title="Leonardo Di Caprio" />
                    </ImageListItem>
                    <ImageListItem key={6} className={classes.paper}>
                        <img
                            alt="actor"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2q9tvih6sHPAEEbPoCRrWpf2IWVG5IOo5jIxqCA7dgrggsQO5"
                            className={classes.paper}
                        />
                        <ImageListItemBar title="Leonardo Di Caprio" />
                    </ImageListItem>
                </div>
            </div>
            <FilteredMovies/>
        </div>
    )
}

export default Home;