import React from "react";
import "./card.styles.css";

export default function Card(props){

    

    if (props.availability === 0){
        return(

            <div className="card">
                <img src={props.photo} alt="" className="photos"/> 
                <div className="text">
                    <img src="/media/star.png" alt="" className="star"/>
                    <span>  {props.rating}</span><span className="gray"> ({props.views}) • USA</span>
                    <p>{props.description}</p>
                    <p><strong>From {props.price}</strong> / person</p>
                    
                    <img src="/media/online.png" alt="soldout" className="available" />
                </div>
            </div>
    
        )
    }else if(props.availability == null){
        return(

            <div className="card">
                <img src={props.photo} alt="" className="photos"/> 
                <div className="text">
                    <img src="/media/star.png" alt="" className="star"/>
                    <span>  {props.rating}</span><span className="gray"> ({props.views}) • USA</span>
                    <p>{props.description}</p>
                    <p><strong>From {props.price}</strong> / person</p>
                    
                </div>
            </div>
    
        )
    
    }
    else{
        return(

            <div className="card">
                <img src={props.photo} alt="" className="photos"/> 
                <div className="text">
                    <img src="/media/star.png" alt="" className="star"/>
                    <span>  {props.rating}</span><span className="gray"> ({props.views}) • USA</span>
                    <p>{props.description}</p>
                    <p><strong>From {props.price}</strong> / person</p>
                    <img src="/media/soldout.png" alt="soldout" className="available" />
                </div>
            </div>
    
        )
    }

    

}
