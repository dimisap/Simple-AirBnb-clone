import React from "react";
import Card from "../card/card.component";
import "./cardlist.styles.css";
import myData from "../../Data"


export default function CardList(){

    const data = myData.map(({id, ...otherprops}) => {
        
            return (
                <Card 
                    key = {id}
                   {...otherprops}
                />       
                )
    })

    return(

        <div className="card-list">

            {data}
            
        </div>

    )

}