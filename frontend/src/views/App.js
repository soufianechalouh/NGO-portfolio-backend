import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "../components/Header";
import ProjectsGrid from "./Projects";
import ProjectDetails from "./ProjectDetails";

import {Provider} from "react-redux";

import store from "../store";


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={ProjectsGrid} />
                        <Route exact path="/pro" component={ProjectDetails} />
                        <Route render={() => ""} />
                    </Switch>
                </div>
            </Provider>
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