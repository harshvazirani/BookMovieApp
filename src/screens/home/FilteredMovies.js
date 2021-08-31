import React from "react";
import { ImageListItemBar } from '@material-ui/core'
import { ImageListItem } from '@material-ui/core'
import { ImageList } from '@material-ui/core'
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


                <ImageList cols={4} style={gridStyle}>
                    <Link  to="/movie/:id">
                        <ImageListItem key={0} style={gridTileStyle}>

                            <img
                                alt="actor"
                                src="https://collider.com/wp-content/uploads/inception-high-resolution-movie-poster-third.jpg"
                            />

                            <ImageListItemBar title="Inception" />

                        </ImageListItem>
                    </Link>
                    
                </ImageList>


            </div>

            <div className="right-child">
                <MovieFilter />
            </div>
        </div>

    )
};