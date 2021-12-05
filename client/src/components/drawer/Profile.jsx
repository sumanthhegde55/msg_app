import { Box , makeStyles, Typography} from '@material-ui/core'
import React, { useContext } from 'react'

import { AccountContext } from '../context/AccountProvider'

const useStyles = makeStyles({
    imageContainer:{
        display:'flex',
        justifyContent:'center',
    },
    displayPicture:{
        borderRadius:'50%',
        width:150,
        height:150,
        padding:'18px 0px'
    },
    nameContainer:{
        background:'#fff',
        padding: '12px 30px 2px',
        boxShadow:'0 1px 3px rgba(0,0,0,0.06)',
        '& :first-child':{
            fontSize:14,
            color:'#009688',
        },
        '& :last-child':{
            color:'#4a4a4a',
            margin: '14px 0',
        }
    },
    description:{
        padding: '10px 20px 20px 30px',
        '& > *':{
            fontSize:12,
            color:'rgba(0,0,0,0,45)'
        }
    }
});

const Profile = () => {

    const classes = useStyles();

    const {account} = useContext(AccountContext);

    return (
        <>
          <Box className = {classes.imageContainer}>
              <img src={account.imageUrl} alt='dp' className={classes.displayPicture}/>
          </Box>
          <Box className = {classes.nameContainer}>
              <Typography>Your Name</Typography>
               <Typography>{account.name}</Typography>
          </Box> 
          <Box className = {classes.description}>
              <Typography>This is not your username or pin.This name will be visible to your whatsapp contacts</Typography>
          </Box>
          <Box className = {classes.nameContainer}>
              <Typography>About</Typography>
               <Typography>Urgent Calls Only</Typography>
          </Box> 
        </>
    )
}

export default Profile
