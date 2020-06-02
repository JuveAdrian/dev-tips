import React from "react";
class DevTipsContainer extends React.Component {
    state = {
        tips: [
            {
                id: 1,
                title: "Position is Everything",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in lacus a turpis feugiat tincidunt. Nulla nec efficitur tortor. Phasellus eu diam erat. Sed facilisis justo non nisl lobortis, in vehicula massa maximus. Suspendisse nunc magna, accumsan eu placerat at, finibus id nisi. Phasellus egestas urna ligula, in elementum lectus hendrerit ut. Donec aliquam congue mi, ut suscipit quam aliquet vel. Nam quis lorem dolor. Sed mauris nibh, mattis et magna eu, eleifend lacinia dolor. Fusce pellentesque ex vel velit congue iaculis."
            },
            {
                id: 2,
                title: "Using Docker for Node.js in Development and Production",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in lacus a turpis feugiat tincidunt. Nulla nec efficitur tortor. Phasellus eu diam erat. Sed facilisis justo non nisl lobortis, in vehicula massa maximus. Suspendisse nunc magna, accumsan eu placerat at, finibus id nisi. Phasellus egestas urna ligula, in elementum lectus hendrerit ut. Donec aliquam congue mi, ut suscipit quam aliquet vel. Nam quis lorem dolor. Sed mauris nibh, mattis et magna eu, eleifend lacinia dolor. Fusce pellentesque ex vel velit congue iaculis."
            },
            {
                id: 3,
                title: "Unpacking arrays with destructuring",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in lacus a turpis feugiat tincidunt. Nulla nec efficitur tortor. Phasellus eu diam erat. Sed facilisis justo non nisl lobortis, in vehicula massa maximus. Suspendisse nunc magna, accumsan eu placerat at, finibus id nisi. Phasellus egestas urna ligula, in elementum lectus hendrerit ut. Donec aliquam congue mi, ut suscipit quam aliquet vel. Nam quis lorem dolor. Sed mauris nibh, mattis et magna eu, eleifend lacinia dolor. Fusce pellentesque ex vel velit congue iaculis."
            }
        ]
    }
    render() {
        return (
            <div>
                {this.state.tips.map(tip => (
                    <li>
                        <h1>{tip.title}</h1>
                        <p>{tip.content}</p>
                    </li>
                ))}
            </div>
        )
    }
}

export default DevTipsContainer;