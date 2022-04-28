import axios from 'axios';
import React from 'react';
import { webform, webOptions } from '../store.js'

export default class HelloWorld extends React.Component{

    state = {
        // userinput: '',
        webOptions,

        
    }


    // handleChange = event => {
    //     this.setState({userinput: event.target.value });
    // }

    handleChange = event => {
        this.setState(({ webOptions }) => ({
          wOption: webOptions.find(opt => opt.webfucntion === event)
        }))
      }

    handleSubmit = event => {
        event.preventDefault();

        const webfunc = {
            // userinput: this.state.userinput,
            webOptions: this.state,

        }

        axios.post(`https://my-json-server.typicode.com/FernandoM0/MockApi/posts`, {webfunc})
        .then(res =>{
            console.log(res); 
            console.log(res.data); 

        })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* <label>
                    Enter Input&nbsp;
                    <input type="text" userinput="userinput" onChange={this.handleChange} />
                </label> */}

                <button type="submit">Enter</button>
            </form>
        )
    }
}