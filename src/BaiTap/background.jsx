import React, { Component } from 'react'
import Model from './glassesImage/model.jpg'

export default class background extends Component {
    render() {
        let megane = this.props.kinh;
        console.log(megane)
        return (
            <div className="all">
                <div className="model">
                <img src={Model} alt="Model girl"/>
                <div className="renderKinh">
                    <img className="megane" src={megane.url}/>
                    <p className="meganeDesc">{megane.desc}</p>
                </div>
                </div>
            </div>
        )
    }
}
