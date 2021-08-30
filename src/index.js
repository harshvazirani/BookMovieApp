import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import Header from './common/Header.js'
import FilterMovies from './screens/home/FilterMovies.js';
import FilteredMovies from './screens/home/FilteredMovies.js';
import Details from './screens/details/Details.js';
import Home from './screens/home/Home.js';
import Controller from './screens/Controller.js';

ReactDOM.render(<Controller/>, document.getElementById('root'));
registerServiceWorker();


