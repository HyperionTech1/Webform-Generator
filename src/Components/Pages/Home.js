import React, { Fragment, useState } from "react"
import { Grid, Paper, Typography, Button, ListItemButton, TextField } from '@mui/material'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { webOptions } from "../../store"
import  Settings from './../FormSettings/Settings'
import { Label } from "@mui/icons-material"
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

    const [option, setOption] = React.useState(false)

    const [displayOptions, getOptions] = React.useState('')

    const [webO, wOption] = React.useState(webOptions)

    const gettingOptions=(e)=>{

    }

    

    const Setting = (props) => {
        const theId = props.name


        function onCreateSettings(e) {
            e.preventDefault();
    
            const postData = {
                name,
                label,
                size,
                type,
                feature
            }
            

            axios.post('https://627733a908221c96846209a2.mockapi.io/api/v1/features',
            postData
            ).then((response) => {
                console.log(response)
                console.log(response.data)
            })
        }

        // if (webOptions.some(e => e.id === props.name)){

        // }
        const [name, setName] = useState('')
        const [label, setLabel] = useState('')
        const [size, setSize] = useState('')
        const [type, setType] = useState('')
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
                            label="Label"
                            onChange={(e) => setLabel(e.target.value)}
                            fullWidth
                            />  

                        </Grid>

                    </Grid>

                    <Grid container direction={"column"} item xs={3} spacing={2}>
                        

                        <Grid item> 

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


                        </Grid>

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
    

    const handleOptions=(e)=>{
        getOptions(e.target.id)
        setOption(true)

    }

    const handleOptionsSelected =(id)=> {
        wOption(webOptions.find(opt => opt.id === id))

    }






    // const featureObj = []

    // const found = featureObj.find(function (webfunction) {
    //     return webfunction
    // })



    //  const [id, opt] = React.useState()

    // for (let feat of webOptions) {
    //     const minRows = (
    //         <tr key={feat.id}>
    //             <td key={1}>{feat.id}</td>
    //             <td key={2}>{feat.title}</td>
    //             <td key={3}>{feat.description}</td>
    //             <td key={4}>{feat.webfunction}</td>
    //         </tr>
    //     )
    //     featureObj.push(minRows);
    // }

    // for (const [key, value] of Object.entries(webOptions)) {
    //     console.log(`${key}: ${value}`);
    //     featureObj
    // }

    return (
        <Grid container>
            <Grid item>
                <Paper style = {styles.Paper}> 
                {/* <DisplayFeat name="Button" />
                <DisplayFeat name="Check Box" />
                <DisplayFeat name="Short Text" />
                <DisplayFeat name="Long Text" />
                <DisplayFeat name="File" /> */}
                    
                    
                    {webOptions.map((f) => 
                        
                        <ListItemButton
                            divider 
                            disableGutters                        
                            onClick={handleOptions}
                        >
                            <option id={f.id}>{f.id}</option>                                             
                        </ListItemButton>
                        
                    )}
                    {/* {webOptions.map((f)=>(
                        <ListItem
                            button
                            onClick={handleOptions}
                            >
                            <ListItemText primary={f.id}/>
                        </ListItem>
                    ))} */}
                    
                    
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style = {styles.Paper}>
                    <Fragment>


                        <h1><b>{option ? null:'Select a Feature from the left'}</b></h1>

                        {option && <Setting name={displayOptions} />}
                        {/* <Setting name={displayOptions} /> */}
                        {/* {option && <Setting name={webOptions.id} />} */}

                        
                        

                    </Fragment>
                </Paper>
            </Grid>
        </Grid>
    )
}

