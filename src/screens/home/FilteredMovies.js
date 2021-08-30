import React from "react";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import './Home.css';
import MovieFilter from "./MovieFilter";
import { Link } from 'react-router-dom';

var gridTileStyle = {
    height: '350px'
}

var gridStyle = {
    minHeight: '380px'
}

export default function FilteredMovies(props) {
    return (

        <div className="flex-container">
            <div className="left-child">


                <GridList cols={4} style={gridStyle}>
                    <Link  to="/movie/:id">
                        <GridListTile key={0} style={gridTileStyle}>

                            <img
                                alt="actor"
                                src="https://collider.com/wp-content/uploads/inception-high-resolution-movie-poster-third.jpg"
                            />

                            <GridListTileBar title="Inception" />

                        </GridListTile>
                    </Link>
                    
                </GridList>


            </div>

            <div className="right-child">
                <MovieFilter />
            </div>
        </div>

    )
};