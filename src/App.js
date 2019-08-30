import React from 'react'; 
import './App.css';
import {HashRouter as Router , Route, Link } from 'react-router-dom';
import RPSV2 from "./v2files/v2component.js";
import RPSV1 from "./v1files/v1component.js";

export default class RPSUI extends React.Component {
    constructor(){
        super();
        this.state = {
            version:""
        }
    }
    v1(e) {
        this.setState({ version:{RPSV1}}); 
    }
    v2(e) {
        this.setState({ version:{RPSV2}}); 
    }

    render() {
        return(
            <Router>
            
                <button type='button' className="versionButton" onClick={(e) => { this.v1(e)}}><Link to='/v1'>Version 1</Link></button>
                <button type='button' className="versionButton" onClick={(e) => { this.v2(e)}}><Link to='/v2'>Version 2</Link></button>
                
                <Route exact path = "/v1" component={RPSV1}/>
                <Route exact path = "/v2" component={RPSV2}/>
            </Router>
            
        )
    }
}
