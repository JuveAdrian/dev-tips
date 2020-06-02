import React from "react";

import TipItem from "./TipItem";

class TipsList extends React.Component {
    render() {
        return (
            <div>
                {this.props.tips.map(tip => (
                    <TipItem key={tip.id} tip={tip} />
                ))}
            </div>
        )
    }
}

export default TipsList;