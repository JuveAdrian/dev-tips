import React from "react";

class TipItem extends React.Component {
        render() {
            const { title, _id, content } = this.props.tip;

            return (
                <li className="tipContainer">
                    <h1>{title}</h1>
                    <p>{content}</p>
                    <p>{_id}</p>
                    <button onClick={() => this.props.deleteTipProps(_id)}>Delete</button>
                </li>
            );    
        }
}

export default TipItem;