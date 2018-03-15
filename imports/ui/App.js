import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Details from './Details.js';

export default class App extends Component {
    constructor(props) 
    {
        super(props);
        var name
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    Form
                </div>
                <Details />
            </div>   
        );
    }
}