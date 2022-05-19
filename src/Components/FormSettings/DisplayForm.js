import { Grid, Box } from "@material-ui/core";
import { ListItem, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { TextBox, FormButtonSubmit } from "./TextBox";
import HelloWorldGet from "../HelloWorldGet";

export function DisplayForm(props) {

    
    const [features, setFeatures] = useState([])
    

    useEffect(() => {
        axios.get(`http://localhost:8080/api/users`)
        .then((response) => {
            console.log(response)
            console.log(response.data);
            setFeatures(response.data);
        }) 
    }, [])


    

    return (
        <Grid container>
            <Grid item xs={6}>               
                {features.map((f) =>

                    <TextBox label={f.textDescription1}/>
                    
                )}
                

                {/* <TextBox label={features.textDescription1}/> */}

                 

            </Grid>           
        </Grid>
            
        
    )
}
