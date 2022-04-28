import React, { Fragment } from "react"
import { Grid, Paper, Typography, Button } from '@mui/material'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { webOptions } from "../../store"


export function Home() {
    
    const styles = {
        Paper: {
            padding: 20,
            marginTop: 10,
            marginBottom: 10,
            height: 500,
            overflowY: 'auto'
            }
    }

    const featureObj = []

    const found = featureObj.find(function (webfunction) {
        return webfunction
    })



     const [id, opt] = React.useState()

    for (let feat of webOptions) {
        const minRows = (
            <tr key={feat.id}>
                <td key={1}>{feat.id}</td>
                <td key={2}>{feat.title}</td>
                <td key={3}>{feat.description}</td>
                <td key={4}>{feat.webfunction}</td>
            </tr>
        )
        featureObj.push(minRows);
    }

    // for (const [key, value] of Object.entries(webOptions)) {
    //     console.log(`${key}: ${value}`);
    //     featureObj
    // }

    return (
        <Grid container>
            <Grid item>
                <Paper style = {styles.Paper}>     
                    {webOptions.map((feat)=>(
                        <ListItem
                            button
                            onClick={() => opt(webOptions.find(opt => opt.id === id))}
                            >
                            <ListItemText primary={feat.title}/>
                        </ListItem>
                    ))}
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style = {styles.Paper}>
                    <Fragment>
                        <List component = "ul">
                            {webOptions.map(({found}) =>
                                <ListItem>
                                    {found}
                                </ListItem>)}
                        </List>
                    </Fragment>
                </Paper>
            </Grid>
        </Grid>
    )
}

