import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "../components/Header";
import ProjectsGrid from "./Projects";
import ProjectDetails from "./ProjectDetails";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={ProjectsGrid} />
                    <Route exact path="/pro" component={ProjectDetails} />
                    <Route render={() => ""} />
                </Switch>
            </div>
    )
        ;
    }
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
    , document.getElementById('app'))