import React, { Component } from 'react'
import store from './store';
import './CurModifiers.css';

let minusArr = [];
export default class CurModifiers extends Component {
    constructor(props) {
        super(props)
        this.state = {
             modArr: [],
             boolArr: [],
        };
    }
    componentDidMount() {
        setInterval(this.getArr, 300);
    }
    getArr = () => {
        this.setState ({ modArr: store.modArr })
        this.setState ({ boolArr: store.boolArr });
        if(store.modArr.length !== minusArr.length) {
            minusArr = [];
            for(let i=0; i<store.modArr.length; i++) {
                minusArr[i] = 'fas fa-minus-circle';
            }
        }
    }
    deleteMod = mod => {
        let modArr = this.state.modArr;
        let index = modArr.indexOf(mod.mod);
        document.getElementById('cur'+index).className='curmodifiers-container curmodifiers-delete';
        setTimeout(() => { 
            if (index > -1) {
                modArr.splice(index, 1);
            }
            store.modArr = modArr;          
                setTimeout(() => {
                    if(store.modArr[index]) {
                        document.getElementById('cur'+index).className='curmodifiers-container';
                    }
                }, 250);
        }, 1300);
    }
    buttonHoverOn = e => {
        try {
            document.getElementById(e.target.id).className = 'curmodifiers-container mod-ani-on';    
            let num = e.target.id;
            num = num.slice(3,num.length);
            minusArr[num] = 'fas fa-minus-circle circle-ani-on';    
        }
        catch { return; }
    }
    buttonHoverOff = e => {
        try {
            if(document.getElementById(e.target.id).className !== 'curmodifiers-container curmodifiers-delete') {
                document.getElementById(e.target.id).className ='curmodifiers-container mod-ani-off';  
                let num = e.target.id;
                num = num.slice(3,num.length); 
                minusArr[num] = 'fas fa-minus-circle circle-ani-off';  
            }  
        }
        catch { return; }
    }
    render() {
        return (
            <div id='curmodifiers'>
                {this.state.modArr.map((mod, i) => (
                    <div onMouseEnter={this.buttonHoverOn} onMouseLeave={this.buttonHoverOff} id={'cur'+i} className='curmodifiers-container' onClick={() => { this.deleteMod({mod}) }} key={i}>
                        <p>{mod.display}</p>
                        <i className={minusArr[i]}></i>
                    </div>
                ))}
                {this.state.boolArr.map((mod, i) => (
                    <div className={'curmodifiers-container '+mod.value} key={i}>
                        <p>{mod.name}</p>
                    </div>
                ))}
            </div>
        )
    }
}
