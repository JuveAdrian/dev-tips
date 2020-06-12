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
            this.props.addTipProps(this.state.title, this.state.content, this.state.category);
        };
        
        this.handleChangeForm = (e) => {
            const eName = e.target.name;
            this.setState({[eName]: e.target.value})
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
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChangeForm} className="field-style field-full align-none" placeholder="Title" />
                    </li>
                    <li>
                        <input type="text" name="category" value={this.state.category} onChange={this.handleChangeForm} className="field-style field-full align-none" placeholder="Category" />
                    </li>
                    <li>
                        <textarea name="content" value={this.state.content} onChange={this.handleChangeForm} className="field-style" placeholder="Content"></textarea>
                    </li>
                    <li>
                    <input type="submit" onClick={this.handleChange} value="Send Message" />
                    </li>
                </ul>
            </form>
        )
    }
}

export default Form;