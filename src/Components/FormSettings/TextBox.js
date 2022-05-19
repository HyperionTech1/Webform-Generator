import { TextField, Box, Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import axios from "axios";
import React, { useState } from "react"



export const Data = {
}

export const TextBox = (props) => {
    
    const [textAnswer1, setText_answer] = useState('')
    const [feat, setFeat] = useState(props.features)

    function textInput(e) {
        e.preventDefault();


        // data to be sent 
        const postData = {
            textAnswer1
        }
        
        axios.post(`http://localhost:8080/api/users`,
        postData
        ).then((response) => {
            console.log(response)
            console.log(response.data)

        })


    }

    

    return (
        <Grid>
            <Grid container spacing={2}>
                <Grid container direction={"column"} item xs={3} spacing={2}>
                    <Grid item>
                        <TextField
                        variant="outlined"
                        label={props.label}
                        onChange={(e) => setText_answer(e.target.value)}
                        fullWidth
                        />
                    </Grid>
                </Grid>
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





