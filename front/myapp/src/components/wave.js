import "../style/wave.css"
import { Component } from "react";

export default class Wave extends Component {
    render() {
        return (
            <div className="wavecontent">

                <div className="waveWrapper waveAnimation">
                    <div className="waveWrapperInner bgTop">
                        <div className="wave waveTop" ></div>
                        
                    </div>
                    <div className="waveWrapperInner bgMiddle">
                        <div className="wave waveMiddle" ></div>
                    </div>
                    <div className="waveWrapperInner bgBottom">
                        <div className="wave waveBottom"></div>
                    </div>
                </div>
            </div>
        )
    }
}