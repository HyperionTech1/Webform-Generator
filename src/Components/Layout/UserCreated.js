import React from "react";
import axios from "axios";

export default class UserCreated extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/users`)
        .then(res => {
            const users = res.data;
            this.setState({ users });
        })
    }

    render() {
        return (
            <ul>
                {
                    this.state.users
                    .map(user =>
                        <li key={user.id}>
                            {user.firstName}
                            {user.email}
                        </li>
                        )
                }
            </ul>
        )
    }
}