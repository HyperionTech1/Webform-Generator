import React, { Fragment } from 'react'  
import { Grid, Paper, Typography, Button } from '@mui/material'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link, useNavigate } from 'react-router-dom'
import HelloWorld from '../HelloWorld.js'



const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'
        }
}



export default ({ 
    webOptions,
    onSelect,
    wOption: {
        id, 
        title = 'Welcome!', 
        description = 'Please select a component from the left.',
        webfunction = ' '
        }
    }) =>
<Grid container>
    <Grid item>
        <Paper style = {styles.Paper}>
            {webOptions.map(([group, webOptions]) =>
                <Fragment>
                    <Typography
                        variant = "h6"
                        style = {{textTransform: 'capitalize'}}
                    >
                        {group}
                    </Typography>
                    <List component = "ul">
                        {webOptions.map(({id, title}) =>
                            <ListItem 
                              button
                              onClick={() => onSelect(id)}
                            > 
                              <ListItemText primary={title}/>
                            </ListItem>
                        )}
                    </List>
                </Fragment>
            )}
        </Paper>
    </Grid>
    <Grid item sm>
        <Paper style = {styles.Paper}>
            <Fragment>
                <List component = "ul">
                    {webOptions.map(({id}) =>
                        <ListItem>
                            {webfunction}
                        </ListItem>)}
                    {<Button 
                     variant = "contained">Add
                    </Button>}
                </List>                
            </Fragment> 
        </Paper>
    </Grid>
</Grid>