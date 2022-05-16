import { ListItem, ListItemButton, ListItemText, List, Grid, Paper } from "@mui/material";
import { Fragment } from "react";
import { Button } from '@mui/material';
import { webOptions } from "../../store";
import Settings from "../FormSettings/Settings";

export default function DisplayFeat(props) {
    
    const styles = {
        Paper: {
            padding: 20,
            marginTop: 10,
            marginBottom: 10,
            height: 500,
            overflowY: 'auto'
            }
    }


    const handleListItemClick = (label) => {

    }

    return (
        
            
        <ListItem
            disablePadding
            button
            onClick={() => handleListItemClick(props.label)}
        >
            <ListItemText primary={props.name} />
        </ListItem>
              
        


        
        
    )
}
