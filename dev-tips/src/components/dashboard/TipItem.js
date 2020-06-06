import React from "react";

class TipItem extends React.Component {
    render() {
        return (
            <li className="tipContainer">
                <h1>{this.props.tip.title}</h1>
                <p>{this.props.tip.content}</p>
            </li>
        )
    }
}

export default TipItem;