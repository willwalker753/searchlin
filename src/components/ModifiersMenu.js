import React, { Component } from 'react';
import store from './store';
import storeFunctions from './storeFunctions';
import './ModifiersMenu.css';

let curMenu = {
    name: '',
    clicks: 0,
};
export default class ModifiersMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modObj: {title: 'How do I use this?', desc: "Searchlin is an advanced Google search creator. By selecting an option on the left you can add a modifier to your search. You can remove search terms individually or remove all with the arrow circle above. Don't forget about the time search in the bar above", img: 'https://github.com/willwalker753/searchlin/blob/master/src/pictures/LinkedSite.png?raw=true/', placeholder1: '', input1: 'remove', input2: 'remove', button: 'remove',},
            input1: '',
            input2: '',
            noinputtext: '',
            safe: false,
            safeBox: 'far fa-square',
            newWindow: false,
            newWindowBox: 'far fa-square',
            personalizedSearch: false,
            personalizedSearchBox: 'far fa-square',
            adTest: false,
            adTestBox: 'far fa-square',
        };
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }
    menuSelect = e => {
        if((e.target.id === curMenu.name)&&(curMenu.clicks === 0)){
            this.setState({ modObj: store.Default});
            curMenu.clicks = 1;
        }
        else {
            this.setState({ modObj: store[e.target.id]});
            curMenu.name = e.target.id;
            curMenu.clicks = 0;
        }
    }
    handleToggle = e => {
        let name = e.target.id;
        let nameBox = e.target.id + 'Box';
        this.setState({ [name]: !this.state.[name] });
        if(this.state.[name] === true) {
            this.setState({ [nameBox]: 'far fa-square' });
        }
        if(this.state.[name] === false) {
            this.setState({ [nameBox]: 'far fa-check-square' });
        }
        let index = store.boolArr.findIndex(element => element.id === e.target.id);
        store.boolArr[index].value = !store.boolArr[index].value;
    }
    submit = e => {
        e.preventDefault();
        let string1 = this.state.input1.trim();
        let string2 = this.state.input2.trim();
        if(string1 === '') {
            this.setState({ noinputtext: 'Nope, you gotta enter something first!' });
        }
        else {
            this.setState({ noinputtext: '' });
            let filteredInput = storeFunctions[curMenu.name](string1, string2);
            store.modArr.push(filteredInput);
        }
    }
    render() {
        return (
            <div id='modifiers-menu'>
                <ul id='modifiers-menu-list'>
                    <li onClick={this.menuSelect} id='GeneralMatch'>General Match</li>
                    <hr/>
                    <li onClick={this.menuSelect} id='ExactMatch'>Exact Match</li>
                    <hr/>
                    <li onClick={this.menuSelect} id='OR'>Or</li>
                    <hr/>
                    <li onClick={this.menuSelect} id='DontInclude'>Don't Include</li>
                    <hr/>
                    <li onClick={this.menuSelect} id='SiteSearch'>Site Search</li>
                    <hr/>
                    <li onClick={this.menuSelect} id='FileType'>File Type</li>
                    <hr/>
                    <li onClick={this.menuSelect} id='RelatedSite'>Related Sites</li>
                    <hr/>
                    <li onClick={this.menuSelect} id='LinkedSite'>Linked Sites</li>
                    <hr/>
                    <form>
                        <input type='checkbox' className='checkbox' id='safe' name='safe' onClick={this.handleToggle}/>
                        <i className={this.state.safeBox}></i>
                        <label htmlFor='safe'>Safe Search</label><br/>
                        <hr/>
                        <input type='checkbox' className='checkbox' id='newWindow' name='newWindow' onClick={this.handleToggle}/>
                        <i className={this.state.newWindowBox}></i>
                        <label htmlFor='newWindow'>New Window</label><br/>
                        <hr/>
                        <input type='checkbox' className='checkbox' id='personalizedSearch' name='personalizedSearch' onClick={this.handleToggle}/>
                        <i className={this.state.personalizedSearchBox}></i>
                        <label htmlFor='personalizedSearch'>Personalized Search Off</label><br/>
                        <hr/>
                        <input type='checkbox' className='checkbox' id='adTest' name='adTest' onClick={this.handleToggle}/>
                        <i className={this.state.adTestBox}></i>
                        <label htmlFor='adTest'>AdWords DB Disconnect</label><br/>
                    </form>
                </ul>
                <div id='modifiers-menu-form'>
                    <h3>{this.state.modObj.title}</h3>
                    <p>{this.state.modObj.desc}</p>
                    {/*<img src={this.state.modObj.img} id='modifiers-menu-form-pic' alt='modifier representation'/> doesn't really look that good with pics*/}
                    <form>
                        <input type='text'  name='input1' onChange={this.handleChange} placeholder={this.state.modObj.placeholder1} className={this.state.modObj.input1}/>
                        <p className={this.state.modObj.input2}>{this.state.modObj.joiner}</p>
                        <input type='text'  name='input2' onChange={this.handleChange} placeholder={this.state.modObj.placeholder2} className={this.state.modObj.input2}/>
                        <button type='submit' className={this.state.modObj.button} onClick={this.submit}><i className="fas fa-plus"></i></button>
                    </form>
                <p id='no-input-text'>{this.state.noinputtext}</p>
                </div>
            </div>
        )
    }
}
