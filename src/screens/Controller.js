import React, {Component} from "react";
import Home from "./home/Home";
import Details from "./details/Details";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookShow from "./bookshow/BookShow";
import Confirmation from "./confirmation/Confirmation";

class Controller extends Component {
    
    baseUrl = "/api/v1/";

    constructor(){
    super();    
    this.state = {loggedIn: false};
    }

    setLoggedIn(){
    const newState = this.state;
    newState.loggedIn = true;    
    this.setState(newState);
    }

    render(){
    return (
        <Router>
            <div className="main-container">
                <Route
                    exact
                    path="/"
                    render={(props) => <Home {...props} baseUrl={this.baseUrl} 
                    setLoggedIn={this.setLoggedIn.bind(this)} loggedIn={this.state.loggedIn} />}
                />
                <Route
                    path="/movie/:id"
                    render={(props) => <Details {...props} baseUrl={this.baseUrl}
                    setLoggedIn={this.setLoggedIn.bind(this)} loggedIn={this.state.loggedIn} />}
                />
                <Route
                    path="/bookshow/:id"
                    render={(props) => <BookShow {...props} baseUrl={this.baseUrl}
                    setLoggedIn={this.setLoggedIn.bind(this)} loggedIn={this.state.loggedIn} />}
                />
                <Route
                    path="/confirm/:id"
                    render={(props) => <Confirmation {...props} baseUrl={this.baseUrl} 
                    setLoggedIn={this.setLoggedIn.bind(this)} loggedIn={this.state.loggedIn} />}
                />
            </div>
        </Router>
    );}
};
export default Controller;