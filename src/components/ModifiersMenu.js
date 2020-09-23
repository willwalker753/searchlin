import React, { Component } from 'react';
import store from './store';

export default class ModifiersMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
             URL: 'Final URL goes here',
             modObj: {title: '', desc: '', img: '', placeholder: ''}
        };
    }
    menuSelect = e => {
        this.setState({ modObj: store[e.target.id]});
        document.getElementById('modifiers-menu-form').className = '';
    }
    render() {
        return (
            <>
                <ul>
                    <li onClick={this.menuSelect} id='ExactMatch'>Exact Match</li>
                    <li onClick={this.menuSelect} id='OR'>OR</li>
                </ul>
                <div id='modifiers-menu-form' className='hidden'>
                    <h3>{this.state.modObj.title}</h3>
                    <p>{this.state.modObj.desc}</p>
                    <img src={this.state.modObj.img} alt='modifier representation'/>
                    <form>
                        <input type='text' placeholder={this.state.modObj.placeholder1}/>
                        <p className={this.state.modObj.input2}>{this.state.modObj.joiner}</p>
                        <input type='text' placeholder={this.state.modObj.placeholder2} className={this.state.modObj.input2}/>
                        <button type='submit'>Enter</button>
                    </form>
                </div>
            </>
        )
    }
}
