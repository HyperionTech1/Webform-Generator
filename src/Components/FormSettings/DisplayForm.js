import { Grid } from "@material-ui/core";
import { ListItem } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from 'react'

export function DisplayForm(props) {

    
    const [features, setFeatures] = useState('')
    const [label, setLabel] = useState('')

    function createData(label, feature){
        return {label, feature}
    }

    useEffect(() => {
        axios.get(`https://627733a908221c96846209a2.mockapi.io/api/v1/features`)
        .then((response) => {
            setFeatures(response.data);
        })
    }, [])

    // useEffect() => {
    //     const postData = {
    //         label,
    //         feature,

    //     }

    //     axios.get(`https://627733a908221c96846209a2.mockapi.io/api/v1/features`,
    //     postData
    //     ).then((response) => {
    //         console.log(response);
    //         console.log(response.data);
    //     })
    // }


    return (
        <Grid container>
            <Grid item>
                {features.label}
            </Grid>
            
        </Grid>
            
        
    )
}
