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

        this.handleChangeFormTitle = (event) => {
            this.setState({title: event.target.value});
            console.log(this.state.title);
        };
        this.handleChangeFormContent = (event) => {
            this.setState({content: event.target.value});
            console.log(this.state.content);
        };
        this.handleChangeFormCategory = (event) => {
            this.setState({category: event.target.value});
            console.log(this.state.category);
        };
    
        
    }
    render() {
        return(
            <form className="form-main-style" onSubmit={this.handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChangeFormTitle}  />
                </label>
                <label>
                    Content:
                    <input type="text" name="content" value={this.state.content} onChange={this.handleChangeFormContent} />
                </label>
                <label>
                    Category:
                    <input type="text" name="category" value={this.state.category} onChange={this.handleChangeFormCategory} />
                </label>
                <input type="submit" onClick={this.handleChange}  value="Wyślij" />
            </form>
        )
    }
}

export default Form;