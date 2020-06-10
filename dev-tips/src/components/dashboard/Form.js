import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: '',
            content: '',
            category: ''
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
        };
        this.handleChangeForm = (e) => {
            console.log(e.target.name);
            console.log(e.target.value);
            const eName = e.target.name;
            this.setState({[eName]: e.target.value})
        }
    
        
    }
    render() {
        return(
            <form className="form-main-style" onSubmit={this.handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChangeForm}  />
                </label>
                <label>
                    Content:
                    <input type="text" name="content" value={this.state.content} onChange={this.handleChangeForm} />
                </label>
                <label>
                    Category:
                    <input type="text" name="category" value={this.state.category} onChange={this.handleChangeForm} />
                </label>
                <input type="submit" onClick={this.handleChange}  value="Wyślij" />
            </form>
        )
    }
}

export default Form;