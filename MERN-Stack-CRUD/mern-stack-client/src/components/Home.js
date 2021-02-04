import React from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import App from '../App'
import Navigation from "./Navigation";
import {Switch} from "react-router";
import './Home.css'
import Main from './Main'

function Home (){
    return (<div className="vlog">
            <h1> Welcome to Blog application</h1>
        <h4>Click to Blog to write a blog</h4>
        <BrowserRouter>
            <div>
                <Navigation />
                <Switch>
                    <Route path="/app" component={App}/>
                    <Route exact path="/home" component = {Main } />
                </Switch>
            </div>
        </BrowserRouter>



    </div>)


}

export default Home;