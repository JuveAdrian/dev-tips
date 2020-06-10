import React from "react";

function TipItem (props) {
        const { title, id, content } = props.tip;

        return <li className="tipContainer">
                <h1>{title}</h1>
                <p>{content}</p>
                <button onClick={() => this.props.deleteTipProps()}>Delete</button>
            </li>
    
}

export default TipItem;