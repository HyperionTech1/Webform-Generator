import TextField from '@material-ui/core/TextField'

export const webform = [
    'Features'
]

export const webOptions = [
    {
        id: 'button',
        title: 'Button',
        description: 'add a button',
        webform: 'Features',
        webfunction: ''
    },
    {
        id: 'check-box',
        title: 'Check Box',
        description: 'add a check box',
        webform: 'Features',
        webfunction: ''
    },
    {
        id: 'short-text',
        title: 'Short Text',
        description: 'add a short text',
        webform: 'Features',
        webfunction: <TextField
            id="standard-textarea"
            label=""
            placeholder="Short-Text"
            multiline
        />
    },
    {
        id: 'long-text',
        title: 'Long Text',
        description: 'add a long text',
        webform: 'Features',
        webfunction: <TextField
            id="outlined-multiline-static"
            label="Long Text"
            multiline
            rows={4}
            defaultValue="Default Value"
        />
    },
    {
        id: 'file-upload',
        title: 'File Upload',
        description: 'Upload a file',
        webform: 'Features',
        webfunction: ''
    },
]