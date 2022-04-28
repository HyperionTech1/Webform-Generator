import { link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

function SendData(props) {
    const navigate = useNavigate()

    const toPages=()=>{
        navigate('/Pages',{state:props})
    }

    return (
        <>
        <div>
            <Button onClick={()=>{toPages()}} 
            variant = "contained">Pages
            </Button>
            </div>
        </>
    )



}

export default SendData;