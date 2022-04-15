import React, { Fragment } from 'react'  
import { Grid, Paper, Typography } from '@mui/material'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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
        description = 'Please select a component from the left.'
        } 
    }) =>
<Grid container>
    <Grid item sm>
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
                            <ListItem button>
                                <ListItemText 
                                    primary = {title}
                                    onClick={() => onSelect(id)}   
                                />    
                            </ListItem>
                        )}
                    </List>
                </Fragment>
            )}
        </Paper>
    </Grid>
    <Grid item sm>
        <Paper style = {styles.Paper}> 
            <Typography
            variant = "h4"
            >
                {title}
            </Typography>
            <Typography
                variant = "subtitle1"
                style = {{marginTop: 20}}
            >
                {description}
            </Typography>
        </Paper>
    </Grid>
</Grid>