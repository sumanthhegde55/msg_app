import { Box , makeStyles, Typography} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    displayPic:{
        width:50,
        height:50,
        borderRadius:'50%',
        padding:'0px 14px'
    },
    component:{
        display:'flex',
        padding:'14px 0px',
        cursor:'pointer'
    }
})
const Conversation = ({user}) => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Box>
                <img src={user.imageUrl} alt="user-pic" className={classes.displayPic}/>
            </Box>
            <Box>
                <Box>
                    <Typography>{user.name}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Conversation
