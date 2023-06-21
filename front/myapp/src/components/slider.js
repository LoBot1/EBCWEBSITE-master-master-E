import { Component } from "react";
import GRP from '../image/GroupeBasket.JPG'
import "../style/slider.css"

export default class Slider extends Component {
    render() {
        return (
            <div className="bodylike">
                <div className="containerslider">
                    <input type='radio' name="slider" id="s1" />
                    <input type='radio' name="slider" id="s2" />
                    <input type='radio' name="slider" id="s3" />
                    <input type='radio' name="slider" id="s4" />
                    <input type='radio' name="slider" id="s5" />
                    <div className="cards">
                        <label htmlFor='s1' id="slide1">
                            <div className="card">
                                <div className="image">
                                    <img src={GRP} alt="BASKET EBC" />
                                    <div className="dots"></div>
                                </div>
                            </div>
                        </label>
                        <label htmlFor='s2' id="slide2">
                            <div className="card">
                                <div className="image">
                                    <img src={GRP} alt="BASKET EBC" />
                                    <div className="dots"></div>
                                </div>
                            </div>
                        </label>
                        <label htmlFor='s3' id="slide3">
                            <div className="card">
                                <div className="image">
                                    <img src={GRP} alt="BASKET EBC" />
                                    <div className="dots"></div>
                                </div>
                            </div>
                        </label>
                        <label htmlFor='s4' id="slide4">
                            <div className="card">
                                <div className="image">
                                    <img src={GRP} alt="BASKET EBC" />
                                    <div className="dots"></div>
                                </div>
                            </div>
                        </label>
                        <label htmlFor='s5' id="slide5">
                            <div className="card">
                                <div className="image">
                                    <img src={GRP} alt="BASKET EBC" />
                                    <div className="dots"></div>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

        )
    }
}