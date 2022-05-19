import { Grid, Box } from "@material-ui/core";
import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react"
import { TextBox } from "./TextBox";




export const FormButtonSubmit = (props) => {

    const [userInput, setInput] = useState(props.data)
    
    function textInput(e) {
        e.preventDefault();


        // data to be sent 
        const postData = {
            userInput
        }
        
        axios.post(`https://627733a908221c96846209a2.mockapi.io/api/v1/features`,
        postData
        ).then((response) => {
            console.log(response)
            console.log(response.data)

        })


    }

    return (
        <Grid container>
            <Grid item xs={6}>
                <Box mt={1} m={2}>
                    
                    <Button 
                    onClick={textInput}
                    variant="contained"
                    >
                    Submit
                    </Button>

                </Box> 
            </Grid>
        </Grid>
        
    )
}
