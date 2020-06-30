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
            event.preventDefault()
            this.props.addTipProps(this.state.title, this.state.content, this.state.category);
            this.state.title = '';
            this.state.content = '';
            this.state.category = '';
        };
        
        this.handleChangeForm = (event) => {
            const eName = event.target.name;
            this.setState({[eName]: event.target.value})
        }        
    };
    render() {
        return(
            <form className="form-style-9" onSubmit={this.handleSubmit}>
                <ul>
                    <li>
                        <h1>Add some interesting tip...</h1>    
                    </li> 
                    <li>
                        <input 
                            type="text" 
                            name="title" 
                            value={this.state.title} 
                            onChange={this.handleChangeForm} 
                            className="field-style field-full align-none" 
                            placeholder="Title" 
                            required 
                        />
                    </li>
                    <li>
                        <input 
                            type="text" 
                            name="category" 
                            value={this.state.category} 
                            onChange={this.handleChangeForm} 
                            className="field-style field-full align-none" 
                            placeholder="Category" 
                            required 
                        />
                    </li>
                    <li>
                        <textarea 
                            name="content" 
                            value={this.state.content} 
                            onChange={this.handleChangeForm} 
                            className="field-style" 
                            placeholder="Content" 
                            required>
                        </textarea>
                    </li>
                    <li>
                    <input 
                        type="submit" 
                        onClick={this.handleChange} 
                        value="Send Message" 
                    />
                    </li>
                </ul>
            </form>
        )
    }
}

export default Form;