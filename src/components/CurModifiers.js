import React, { Component } from 'react'
import store from './store';
import './CurModifiers.css';

export default class CurModifiers extends Component {
    constructor(props) {
        super(props)
        this.state = {
             modArr: [],
        };
    }
    componentDidMount() {
        setInterval(this.getArr, 300);
    }
    getArr = () => {
        this.setState ({ modArr: store.modArr })
    }
    deleteMod = mod => {
        let modArr = this.state.modArr;
        let index = modArr.indexOf(mod.mod);
        if (index > -1) {
            modArr.splice(index, 1);
          }
        console.log(index)
        store.modArr = modArr;
    }
    render() {
        return (
            <>
                {this.state.modArr.map((mod, i) => (
                    <div className='curmodifiers-container' onClick={() => { this.deleteMod({mod}) }} key={i}>
                        <p>{mod.display}</p>
                        <i className="fas fa-minus-circle"></i>
                    </div>
                ))}
            </>
        )
    }
}
