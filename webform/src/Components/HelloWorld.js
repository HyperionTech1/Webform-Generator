import axios from 'axios';
import React from 'react';

export default class HelloWorld extends React.Component{
    state = {
        userinput: '',
    }

    handleChange = event => {
        this.setState({userinput: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const usrinput = {
            userinput: this.state.userinput,

        }

        axios.post(`https://my-json-server.typicode.com/FernandoM0/MockApi/posts`, {usrinput})
        .then(res =>{
            console.log(res); 
            console.log(res.data); 

        })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Enter Input&nbsp;
                    <input type="text" userinput="userinput" onChange={this.handleChange} />
                </label>
                <button type="submit">Enter</button>
            </form>
        )
    }




}