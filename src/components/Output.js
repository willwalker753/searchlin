import React, { Component } from 'react';
import google from '../pictures/google-logo-white.png';
import store from './store';
import storeFunctions from './storeFunctions';
import './Output.css';

export default class Output extends Component {
    constructor(props) {
        super(props);
        this.state = {
             URL: 'https://www.google.com/search?',
             modArr: [],
             boolArr: [],
        };
    }
    componentDidMount() {
        setInterval(this.getArr, 300);
    }
    getArr = e => {
        this.setState ({ modArr: store.modArr });
        this.setState ({ boolArr: store.boolArr });
        let URL = 'https://www.google.com/search?';
        for(let i=0; i<this.state.modArr.length; i++) {
            URL = URL + this.state.modArr[i].url + '&';
        }
        for(let i=0; i<this.state.boolArr.length; i++) {
            if(this.state.boolArr[i].value) {
                URL = URL + this.state.boolArr[i].url + '&';
            }
        }
        this.setState({ URL: URL })
    }
    reset = e => {
        store.modArr = [];
        for(let i=0; i<store.boolArr.length; i++) {
            store.boolArr[i].value = false;
        }
    }
    dateChange = e => {
        console.log(e.target.value);
        let dateMod = storeFunctions.dateChange(e.target.value);
        console.log(dateMod)
        store.modArr.push(dateMod);


        // let siteArray = ['http://www.amazon.com','http://www.ebay.com'];
        // for(let i=0; i<siteArray.length; i++){
        //     window.open(siteArray[i]);
        // }
    }
    render() {
        return (
            <>
                <div id='output-container'>
                    <button onClick={this.reset}><i className="fas fa-undo-alt"></i></button>
                    <div id='output-search-bar'>
                        <img src={google} id='output-google-logo' alt='google'/>
                        
                        <form >
                            <select name="date" id="date" onChange={this.dateChange}>
                                <option value="all">All Time</option>
                                <option value="day">Last Day</option>
                                <option value="week">Last Week</option>
                                <option value="month1">Last Month</option>
                                <option value="month3">3 Months</option>
                                <option value="month6">6 Months</option>
                                <option value="year1">Last Year</option>
                                <option value="year2">2 Years</option>
                                <option value="year5">5 Years</option>
                            </select>
                        </form>
                        <p>{this.state.URL}</p>
                        <a href={this.state.URL} target='_blank' rel="noopener noreferrer"><button><i className="fas fa-search"></i></button></a>
                    </div>
                    
                </div>
            </>
        )
    }
}
