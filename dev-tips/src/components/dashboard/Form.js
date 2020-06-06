import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            value: 'Testowy formularz'
        };

        this.handleChange = (event) => {
            console.log(event.target.value);
            event.preventDefault()
            const data = { title: this.state.value, content: 'example content', category: 'example category' };
            fetch("http://localhost:4000/tips", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
                })
                .then(response => response.json())
                .then(data => {
                  console.log('Success:', data);
                })
                .catch((error) => {
                  console.error('Error:', error);
                });
      }
    
        
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Imię:
                    <input type="text" value={this.state.value}  />
                </label>
                <input type="submit" onClick={this.handleChange}  value="Wyślij" />
            </form>
        )
    }
}

export default Form;