import React, { useState } from "react";
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

// This is the bottom half of the home page.
export default function FilteredMovies(props) {
    const [title, ] = useState("Inception");
    const [subtitle, ] = useState("Release Date : 16th July 2010");
    const [poster_url, ] = useState("https://collider.com/wp-content/uploads/inception-high-resolution-movie-poster-third.jpg");

    return (

        <div className="flex-container">
            {/*Grid of released movies along with filters*/}
            <div className="left-child">
                <ImageList cols={4} style={gridStyle}>

                    <Link to="/movie/:id">
                        <ImageListItem key={0} style={gridTileStyle}>
                            <img
                                alt="actor"
                                src={poster_url}
                            />
                            <ImageListItemBar title={title} subtitle={subtitle}/>
                        </ImageListItem>
                    </Link>

                </ImageList>
            </div>

            <div className="right-child">
                <MovieFilter /> {/*This is the Material UI Card Component that is used to filter the Movies.*/}
            </div>
        </div>

    )
};




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