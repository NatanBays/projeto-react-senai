import React from "react";
import './informationText.css'

function InformationText(props) {

    return(
        <div className="information-text">
            <h2>{props.h2Content}</h2>
            <p>
                {props.pContent}
            </p>
        </div>
    )

}
export default InformationText
