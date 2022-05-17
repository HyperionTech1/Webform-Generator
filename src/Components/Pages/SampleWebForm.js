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

    const classes = styles();
  

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
    
        axios.post(`https://627733a908221c96846209a2.mockapi.io/api/v1/users`,
        postData
        ).then((response) => {
            console.log(response);
            console.log(response.data);
        })
    }
    


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
            <Grid container>
                <Grid item>
                    <UserCreated />        

                </Grid>
            </Grid>    
        </form>
    )
}
