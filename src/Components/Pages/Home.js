import React, { Fragment, useState } from "react"
import { Grid, Paper, Typography, Button, ListItemButton, TextField } from '@mui/material'
import { Checkbox } from '@mui/material/';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { webOptions } from "../../store"
import { Check, Label } from "@mui/icons-material"
import DisplayFeat from "../Layout/DisplayFeat"
import Chip from '@mui/material/Chip';
import axios from "axios"
import { Box } from "@material-ui/core"


export function Home(props) {
    
    
    const styles = {
        Paper: {
            padding: 20,
            marginTop: 10,
            marginBottom: 10,
            height: 500,
            overflowY: 'auto'
            }
    }

    
    // set to false to display instruction to select feature 
    const [option, setOption] = React.useState(false)

    // setting state to capture user input 
    const [displayOptions, getOptions] = React.useState([])


    const ShortText=()=> {
        
        const [textDescription1, setText] = useState('')

        const onSubmitText = (e) => {
            e.preventDefault();
    
            const postData = {
                textDescription1
            }
    
            axios.put(`http://localhost:8080/api/users/37`,
            postData
            ).then((response) => {
                console.log(response.data)
            })
            
            
    
        }
        

        

        return (
            <Grid>
                <Typography variant="h3" gutterBottom component="div">
                    <Chip label="Short Text" />
                </Typography>
                <Grid container spacing={2}>
                    <Grid container direction={"column"} item xs={3} spacing={2}>
                        <TextField
                        variant="outlined"
                        label="Short Text Label"
                        onChange={(e) => setText(e.target.value)}
                        fullWidth
                        />
                    </Grid>
                    <Box mt={1} m={2}>
                            <Button 
                            onClick={onSubmitText}
                            variant="contained"
                            >
                            Submit
                            </Button>

                        </Box>
                </Grid>
            </Grid>
        )
    }

    const ButtonForm=()=> {

        const [buttonDescription1, setText] = useState('')

        const onSubmitText = (e) => {
            e.preventDefault();
    
            const postData = {
                buttonDescription1
            }
    
            axios.put(`http://localhost:8080/api/users/37`,
            postData
            ).then((response) => {
                console.log(response.data)
            })
            
            
    
        }


        return (
            <Grid>
                <Typography variant="h3" gutterBottom component="div">
                    <Chip label="Button" />
                </Typography>
                <Grid container spacing={2}>
                    <Grid container direction={"column"} item xs={3} spacing={2}>
                        <TextField
                        variant="outlined"
                        label="Button Label"
                        onChange={(e) => setText(e.target.value)}
                        fullWidth
                        />
                    </Grid>
                    <Box mt={1} m={2}>
                            <Button 
                            onClick={onSubmitText}
                            variant="contained"
                            >
                            Submit
                            </Button>

                        </Box>
                </Grid>
            </Grid>
        )
    }


    const Setting = (props) => {
        const theId = props.name


        const onCreateSettings = (e) => {
            e.preventDefault();
            
            // data to be sent to backend 
            const postData = {
                textDescription1
            }
            

            axios.post(`http://localhost:8080/api/users`,
            postData
            ).then((response) => {
                console.log(response)
                console.log(response.data)
            })


        }

        // declaring data state to send to backend
        // const [name, setName] = useState('')
        // const [label, setLabel] = useState('')
        // const [size, setSize] = useState('')
        // const [type, setType] = useState('')
        const [textDescription1, setTextDescription] = useState('')

        // using prop.name to get the feature that is being clicked 
        const [feature, setFeature] = useState(props.name)


        return (
            
            <Grid>
                <Typography variant="h3" gutterBottom component="div">
                    <Chip label={props.name} />
                </Typography>

                <Grid container spacing={2}>
                    <Grid container direction={"column"} item xs={3} spacing={2}>
                        {/* <Grid item >

                            <TextField
                            variant="outlined" 
                            feature={feature}                        
                            label="Name"
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                            />
                        
                        </Grid>
                         */}
                        <Grid item>

                            <TextField
                            variant="outlined"
                            feature={feature}
                            label="Description"
                            onChange={(e) => setTextDescription(e.target.value)}
                            fullWidth
                            />  

                        </Grid>

                    </Grid>

                    <Grid container direction={"column"} item xs={3} spacing={2}>
                        

                        {/* <Grid item> 

                            <TextField
                            variant="outlined"
                            feature={feature}
                            label="Size"
                            // onChange={(e) => setSize(e.target.value)}
                            /> 

                        </Grid>  

                        <Grid item> 
                            <TextField
                            variant="outlined"
                            feature={feature}
                            label="Type"
                            // onChange={(e) => setType(e.target.value)}
                            /> 


                        </Grid> */}

                        <Box mt={1} m={2}>
                            <Button 
                            onClick={onCreateSettings}
                            variant="contained"
                            >
                            Submit
                            </Button>

                        </Box>
                    </Grid>                    
                </Grid>                
            </Grid>
  
            
        )
       
    }


    
    
    // when one of the features on the left is clicked 
    // set setOption to true to display input for feature
    const handleOptions=(e)=>{
        getOptions(e.target.id)
        setOption(true)

    }


    return (
        <Grid container>
            <Grid item>
                <Paper style = {styles.Paper}> 
                    
                    {webOptions.map((f) => 
                        
                        <ListItemButton
                            divider 
                            disableGutters                        
                            onClick={handleOptions}
                        >
                            <option id={f.id}>{f.id}</option>                                             
                        </ListItemButton>
                        
                    )}  
             
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style = {styles.Paper}>
                    <Fragment>


                        <h1><b>{option ? null:'Select a Feature from the left'}</b></h1>
                        {option && <Setting name={displayOptions} />}

                        {/* {webOptions.map((d) => 
                            <Setting name={d.id}/>
                        )} */}
                        {/* <ShortText/>
                        <ButtonForm/> */}

                        

                        

                    </Fragment>
                </Paper>
            </Grid>
        </Grid>
    )
}

