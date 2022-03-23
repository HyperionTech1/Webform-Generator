import axios from 'axios';
import React from 'react';


export default class HelloWorldGet extends React.Component {
    state = {
        comments: [],
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            console.log(res);
            this.setState({ comments: res.data });
        });
    }

    render() {
        return (
            <ul>
            { this.state.comments.map(comment => (
                <li key={comment.id}>{comment.name}</li>
            ))}
            </ul>
        )
    }

}