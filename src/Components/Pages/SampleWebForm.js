import { TextField } from '@material-ui/core';
import { Grid, Paper, Typography, Button, Stack } from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios';
import UserCreated from '../Layout/UserCreated';

const styles = makeStyles(theme =>({
    root: {
'& .MuiFormControl-root': {
    width: '80%',
    margin:theme.spacing(1)
}
    }
}))


const initialFValues = {
    id :0,
    firstName:'',
    lastName:'',
    email:'',
    mobile:'',
    subscribe:false,
}




export function Samplewebform() {

    // const [values, setValues] = useState(initialFValues);
    const classes = styles();
    // const [post, setPost] = useState(initialFValues);
    // const baseURL = "";

    const [firstName, setFName] = useState('')
    const [lastName, setlName] = useState('')
    const [email, setEmail] = useState('')
    

    function onCreatePost(e) {
        e.preventDefault();
    
        const postData = {
            firstName,
            lastName,
            email,
        };
    
        axios.post(`http://localhost:8080/api/users`,
        postData
        ).then((response) => {
            console.log(response);
            console.log(response.data);
        })
    }
    

    // const handleInputChange = e=>{

    //     const { name, value } = e.target
    //     setValues({
    //         ...values,
    //         [name]:value
    //     })


        
    // }

    // const handleSubmit = e=>{
        
    //     const { name, value } = e.target
    //     setPost({
    //         ...values,
    //         [name]:value
    //     })

    //     axios.post(`https://my-json-server.typicode.com/FernandoM0/MockApi/posts`, {name})
    //     .then(res =>{
    //         console.log(res);
    //         console.log(res.data);

    //     })
        

        
    // }

    return (
        <form className={classes.root}>
            <Grid container>
                <Grid item xs={6}>

                    <TextField 
                    variant="outlined" 
                    label="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFName(e.target.value)}
                    />

                    <TextField  
                    variant="outlined"
                    label="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setlName(e.target.value)}
                    />

                    <TextField  
                    variant="outlined"
                    label="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                </Grid>
                <Grid item xs={6}></Grid>
                <Stack spacing={2} direction="row">
                    <Button
                        onClick={onCreatePost} 
                        variant="contained">
                        Submit
                    </Button>
                </Stack>
            </Grid>    
            <UserCreated />
        </form>
    )
}
