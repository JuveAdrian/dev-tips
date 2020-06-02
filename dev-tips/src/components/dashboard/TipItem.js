import React from "react";

class TipItem extends React.Component {
    render() {
        return (
            <li className="tipContainer">
                <h1>{this.props.tip.title}</h1>
            </li>
        )
    }
}

export default TipItem;