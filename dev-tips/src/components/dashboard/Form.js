import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: 'Testowy tytuł formularza',
            content: 'Testowy tekst formularza',
            category: 'Testowa kategoria formularza'
        };

        this.handleChange = (event) => {
            console.log(event.target.value);
            event.preventDefault()
            const data = { title: this.state.title, content: this.state.content, category: this.state.category };
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
                    Title:
                    <input type="text" value={this.state.title}  />
                </label>
                <label>
                    Content:
                    <input type="text" value={this.state.content}  />
                </label>
                <label>
                    Category:
                    <input type="text" value={this.state.category}  />
                </label>
                <input type="submit" onClick={this.handleChange}  value="Wyślij" />
            </form>
        )
    }
}

export default Form;