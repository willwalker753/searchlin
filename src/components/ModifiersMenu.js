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
        this.setState({ modObj: store[e.target.id]});
        curMenu = e.target.id;
        document.getElementById('modifiers-menu-form').className = '';
    }
    submit = e => {
        e.preventDefault();
        let string1 = this.state.input1.trim();
        let string2 = this.state.input2.trim();
        console.log(curMenu)
        let filteredInput = storeFunctions[curMenu](string1, string2);
        store.modArr.push(filteredInput);
        //this.refs.input1.value = ''; ref='input1'
        //this.refs.input2.value = ''; ref='input2'
    }
    render() {
        return (
            <>
                <ul id='modifiers-menu-list'>
                    <li onClick={this.menuSelect} id='ExactMatch'>Exact Match</li>
                    <li onClick={this.menuSelect} id='OR'>OR</li>
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
