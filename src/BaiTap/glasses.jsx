import React, { Component } from 'react'
import GlassV1 from './glassesImage/v1.png'
import GlassV2 from './glassesImage/v2.png'
import GlassV3 from './glassesImage/v3.png'
import GlassV4 from './glassesImage/v4.png'
import GlassV5 from './glassesImage/v5.png'
import GlassV6 from './glassesImage/v6.png'
import GlassV7 from './glassesImage/v7.png'
import GlassV8 from './glassesImage/v8.png'
import GlassV9 from './glassesImage/v9.png'


export default class glasses extends Component {
    render() {
        let {render} = this.props;
        return (
            this.props.glasses.map((kinh,index) => {
            return(   
                <div className="glass">
                <img src={kinh.url} alt={kinh.name} onClick={()=>render(kinh)}/>
            </div>
            )
            })
        )
    }
}
