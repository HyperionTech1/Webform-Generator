import { Grid } from "@material-ui/core";
import { ListItem } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { TextBox } from "./TextBox";

export function DisplayForm(props) {

    
    const [features, setFeatures] = useState([])
    

    useEffect(() => {
        axios.get(`https://627733a908221c96846209a2.mockapi.io/api/v1/features`)
        .then((response) => {
            console.log(response)
            console.log(response.data);
            setFeatures(response.data);
        }) 
    }, [])





    return (
        <Grid container>
            <Grid item xs={6}>
                {/* {features.map((f) =>{
                    return(
                        <TextBox label={f.label}/>
                    )
                })} */}
                {features.map((f) => <TextBox label={f.label}/>)}
                {/* <TextBox label={features.label}/> */}
            </Grid>           
        </Grid>
            
        
    )
}
