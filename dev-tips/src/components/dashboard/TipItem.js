import React from "react";

class TipItem extends React.Component {
    render() {
        return (
            <li>{this.props.tip.title}</li>
        )
    }
}

export default TipItem;