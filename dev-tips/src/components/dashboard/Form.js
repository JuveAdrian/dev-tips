import React from 'react';

class Form extends React.Component {
    state = {
        value: 'Testowy formularz'
    }
    handleChange(event) {
        console.log(event.target.value);
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Imię:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Wyślij" />
            </form>
        )
    }
}

export default Form;