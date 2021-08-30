import React from "react";
import { makeStyles } from "@material-ui/styles";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import GridListTile from "@material-ui/core/GridListTile";
import './Home.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
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
                <Header showBookMovieButton={false}/>
                </div>
            <div className="redheader">
                <center><span className="heading"><strong>Upcoming Movies</strong></span></center>
            </div>
            <div className="movielist">
                <div className="grid">
                    <GridListTile key={0} className={classes.paper}>
                        <img
                            alt="actor"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2q9tvih6sHPAEEbPoCRrWpf2IWVG5IOo5jIxqCA7dgrggsQO5"
                            className={classes.paper}
                        />
                        <GridListTileBar title="Leonardo Di Caprio" />
                    </GridListTile>
                    <GridListTile key={1} className={classes.paper}>
                        <img
                            alt="actor"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2q9tvih6sHPAEEbPoCRrWpf2IWVG5IOo5jIxqCA7dgrggsQO5"
                            className={classes.paper}
                        />
                        <GridListTileBar title="Leonardo Di Caprio" />
                    </GridListTile>
                    <GridListTile key={2} className={classes.paper}>
                        <img
                            alt="actor"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2q9tvih6sHPAEEbPoCRrWpf2IWVG5IOo5jIxqCA7dgrggsQO5"
                            className={classes.paper}
                        />
                        <GridListTileBar title="Leonardo Di Caprio" />
                    </GridListTile>
                    <GridListTile key={3} className={classes.paper}>
                        <img
                            alt="actor"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2q9tvih6sHPAEEbPoCRrWpf2IWVG5IOo5jIxqCA7dgrggsQO5"
                            className={classes.paper}
                        />
                        <GridListTileBar title="Leonardo Di Caprio" />
                    </GridListTile>
                    <GridListTile key={4} className={classes.paper}>
                        <img
                            alt="actor"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2q9tvih6sHPAEEbPoCRrWpf2IWVG5IOo5jIxqCA7dgrggsQO5"
                            className={classes.paper}
                        />
                        <GridListTileBar title="Leonardo Di Caprio" />
                    </GridListTile>
                    <GridListTile key={5} className={classes.paper}>
                        <img
                            alt="actor"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2q9tvih6sHPAEEbPoCRrWpf2IWVG5IOo5jIxqCA7dgrggsQO5"
                            className={classes.paper}
                        />
                        <GridListTileBar title="Leonardo Di Caprio" />
                    </GridListTile>
                    <GridListTile key={6} className={classes.paper}>
                        <img
                            alt="actor"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2q9tvih6sHPAEEbPoCRrWpf2IWVG5IOo5jIxqCA7dgrggsQO5"
                            className={classes.paper}
                        />
                        <GridListTileBar title="Leonardo Di Caprio" />
                    </GridListTile>
                </div>
            </div>
            <FilteredMovies/>
        </div>
    )
}

export default Home;