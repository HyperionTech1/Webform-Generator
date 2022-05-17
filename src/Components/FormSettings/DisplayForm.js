import { Grid } from "@material-ui/core";
import { ListItem } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from 'react'

export function DisplayForm(props) {

    
    const [features, setFeatures] = useState('')


    useEffect(() => {
        axios.get(`https://627733a908221c96846209a2.mockapi.io/api/v1/features/1`)
        .then((response) => {
            console.log(response)
            console.log(response.data);
            setFeatures(response.data);
        }) 
    }, [])



    return (
        <Grid container>
            <Grid item xs={6}>
                <h1>Hello </h1>
                <p>{features.label}</p>
            </Grid>
            
        </Grid>
            
        
    )
}
