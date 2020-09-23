import React, { Component } from 'react';
import Nav from './Nav';
import Output from './Output';
import ModifiersMenu from './ModifiersMenu';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
             text: 'something'
        };
    }
    render() {
        return (
            <>
                <Nav link1='about' linkLabel1='About' />
                <Output />
                <ModifiersMenu />
            </>
        )
    }
}
