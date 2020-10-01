import React, { Component } from 'react';
import store from './store';
import storeFunctions from './storeFunctions';
import './ModifiersMenu.css';

let curMenu = '';
export default class ModifiersMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
             modObj: {title: '', desc: '', img: '', placeholder: ''},
             input1: '',
             input2: '',
        };
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }
    menuSelect = e => {
        if(e.target.id === curMenu){
            document.getElementById('modifiers-menu-form').className = 'hidden';
        }
        else {
            this.setState({ modObj: store[e.target.id]});
            curMenu = e.target.id;
            document.getElementById('modifiers-menu-form').className = '';
        }
    }
    handleToggle = e => {
        let index = store.boolArr.findIndex(element => element.id === e.target.id);
        store.boolArr[index].value = !store.boolArr[index].value;
    }
    submit = e => {
        e.preventDefault();
        let string1 = this.state.input1.trim();
        let string2 = this.state.input2.trim();
        let filteredInput = storeFunctions[curMenu](string1, string2);
        store.modArr.push(filteredInput);
    }
    render() {
        return (
            <>
                <ul id='modifiers-menu-list'>
                    <li onClick={this.menuSelect} id='GeneralMatch'>General Match</li>
                    <li onClick={this.menuSelect} id='ExactMatch'>Exact Match</li>
                    <li onClick={this.menuSelect} id='OR'>Or</li>
                    <li onClick={this.menuSelect} id='DontInclude'>Don't Include</li>
                    <li onClick={this.menuSelect} id='SiteSearch'>Site Search</li>
                    <li onClick={this.menuSelect} id='FileType'>File Type</li>
                    <li onClick={this.menuSelect} id='RelatedSite'>Related Sites</li>
                    <li onClick={this.menuSelect} id='LinkedSite'>Linked Sites</li>
                    <form>
                        <input type='checkbox' id='safe' name='safe' onClick={this.handleToggle}/>
                        <label htmlFor='safe'>Safe Search</label><br/>
                        <input type='checkbox' id='newWindow' name='newWindow' onClick={this.handleToggle}/>
                        <label htmlFor='newWindow'>New Window</label><br/>
                        <input type='checkbox' id='personalizedSearch' name='personalizedSearch' onClick={this.handleToggle}/>
                        <label htmlFor='personalizedSearch'>Personalized Search Off</label><br/>
                        <input type='checkbox' id='adTest' name='adTest' onClick={this.handleToggle}/>
                        <label htmlFor='adTest'>AdWords DB Disconnect</label><br/>
                    </form>
                </ul>
                <div id='modifiers-menu-form' className='hidden'>
                    <h3>{this.state.modObj.title}</h3>
                    <p>{this.state.modObj.desc}</p>
                    <img src={this.state.modObj.img} alt='modifier representation'/>
                    <form>
                        <input type='text'  name='input1' onChange={this.handleChange} placeholder={this.state.modObj.placeholder1}/>
                        <p className={this.state.modObj.input2}>{this.state.modObj.joiner}</p>
                        <input type='text'  name='input2' onChange={this.handleChange} placeholder={this.state.modObj.placeholder2} className={this.state.modObj.input2}/>
                        <button type='submit' onClick={this.submit}>Enter</button>
                    </form>
                </div>
            </>
        )
    }
}
