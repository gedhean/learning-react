import React, { Component } from "react";
import './MyComponent.css';
import Welcome from './Welcome';

export default class MyComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }
    
    timer = () => {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }
    
    render() {
        setInterval(this.timer, 1000);
        
        return (
            <div className="my-component">
                <Welcome name="Gêdhean"/>
                <br/>
                <h2>It is { new Date().toLocaleTimeString() }.</h2>
            </div>
        );
    }
}