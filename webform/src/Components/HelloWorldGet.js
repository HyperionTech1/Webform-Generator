import axios from 'axios';
import React from 'react';


export default class HelloWorldGet extends React.Component {
    state = {
        comments: [],
    }

    componentDidMount() {
        axios.get(`https://my-json-server.typicode.com/typicode/demo/comments`).then(res => {
            console.log(res);
            this.setState({ comments: res.data });
        });
    }

    render() {
        return (
            <ul>
            { this.state.comments.map(comment => (
                <li key={comment.id}>{comment.body}</li>
            ))}
            </ul>
        )
    }

}