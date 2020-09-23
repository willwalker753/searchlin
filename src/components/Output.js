import React, { Component } from 'react';
import google from '../pictures/google-logo.png';
import './output.css';

export default class Output extends Component {
    constructor(props) {
        super(props);
        this.state = {
             URL: 'Final URL goes here'
        };
    }
    submit = e => {
        console.log('Submit');
    }
    render() {
        return (
            <>
                <img src={google} id='output-google-logo' alt='google'/>
                <p>{this.state.URL}</p>
                <button onClick={this.submit}><i className="fas fa-search"></i></button>
            </>
        )
    }
}
