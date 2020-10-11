import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "../components/Header";
import Acceuil from "../components/Acceuil";
import ProjectsGrid from "./Projects";
import ProjectDetails from "./ProjectDetails";

import {Provider} from "react-redux";


import store from "../store";
import { HomeOutlined } from '@material-ui/icons';


const bodyStyle = {
  fontFamily: 'Helvetica',
};

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className="App" style={bodyStyle}>
                    <Header/>
                    <Switch>
                    
                        <Route exact path="/" component={ProjectsGrid} />
                        <Route exact path="/Acceuil" component={Acceuil} />
                        <Route exact path="/:id?" component={ProjectDetails} />
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