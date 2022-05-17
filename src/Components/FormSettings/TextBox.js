import { TextField } from "@material-ui/core";
import { Grid } from "@mui/material";

export function TextBox(props) {
    

    return (
        <Grid container>
            <Grid item xs={6}>
                <TextField
                variant="outlined"
                label={props.label}
                fullWidth
                />
            </Grid>
        </Grid>
    )
}
