import React, { Component } from 'react';
import google from '../pictures/google-logo.png';
import store from './store';
import './output.css';

export default class Output extends Component {
    constructor(props) {
        super(props);
        this.state = {
             URL: 'https://www.google.com/search?',//as_epq=amazon&as_eq=duck',
             modArr: [],
        };
    }
    componentDidMount() {
        setInterval(this.getArr, 300);
    }
    getArr = e => {
        this.setState ({ modArr: store.modArr });
        let URL = 'https://www.google.com/search?';
        for(let i=0; i<this.state.modArr.length; i++) {
            URL = URL + this.state.modArr[i].url + '&';
        }
        this.setState({ URL: URL })
    }
    
    submit = e => {
        console.log('Submit');
    }
    render() {
        return (
            <>
                <div id='output-container'>
                    <img src={google} id='output-google-logo' alt='google'/>
                    <p>{this.state.URL}</p>
                    <a href={this.state.URL} target='_blank' rel="noopener noreferrer"><button onClick={this.submit}><i className="fas fa-search"></i></button></a>
                </div>
            </>
        )
    }
}
