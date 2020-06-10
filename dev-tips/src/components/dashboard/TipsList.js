import React from "react";

import TipItem from "./TipItem";

class TipsList extends React.Component {
    render() {
        return (
            <div className="listContainer">
                {this.props.tips.map(tip => (
                    <TipItem 
                        key={tip._id} 
                        tip={tip} 
                        deleteTipProps={this.props.deleteTipProps}
                    />
                ))}
            </div>
        )
    }
}

export default TipsList;