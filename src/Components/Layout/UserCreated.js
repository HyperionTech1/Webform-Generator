import React from "react";
import axios from "axios";
import { List, ListItem, Paper, Typography } from "@material-ui/core";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default class UserCreated extends React.Component {
    state = {
        users: [],
        rows: [
            this.createData()
        ]
    }

    createData(fname, lname, email){
        return {fname, lname, email}
        
    }


    componentDidMount() {
        axios.get(`
        
        
        
        
        `)
        .then(res => {
            const users = res.data;
            this.setState({ users });
        })
    }

    render() {
        return (
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map(( user ) => (
                        <TableRow
                            key={user.firstName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {user.firstName}
                            </TableCell>
                            <TableCell align="right">{user.lastName}</TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


           
            
        )
    }
}