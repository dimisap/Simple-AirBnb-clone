import React from "react";
import "./hero.styles.css";


export default function Hero(){

    return(

        <div className="hero">
            <img src="/media/photos.png" alt="photos" className="hero--photos"/>
            <div className="hero--text">
                <h1>Online Experiences</h1>
                <p className="text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>


    )



}
