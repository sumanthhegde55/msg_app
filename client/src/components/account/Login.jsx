import React from 'react'
import { Dialog ,withStyles , Box, Typography,List, ListItem} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {GoogleLogin} from 'react-google-login';
import { useContext } from 'react';
import {AccountContext} from '../context/AccountProvider';
import { clientId } from '../constants/data';
const style = {
    dialogPaper: {
        marginTop: '12%',
        height: '95%',
        width: '60%',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        overflow: 'hidden'
    }
}
const useStyles = makeStyles({
    component: {
        display: 'flex'
    },
    dialog: {
        padding: '56px 0 56px 56px',
    },
    qr: {
        margin: '50px 15px 0 50px',
        height: 264,
        width: 264
    },
    title: {
        fontSize: 24,
        paddingLeft:0,
        marginBottom: 25,
        color: '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight: 300  
    },
    list: {
        '&  > *': {
            padding: 0,
            marginTop: 15,
            fontSize: 18,
            lineHeight: '28px',
            color: '#4a4a4a'
        }
    }
})
const Login = ({classes}) => {
    const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    const classname = useStyles();

    const {account,setAccount} = useContext(AccountContext);
    const onLoginSuccess = (res) =>{
        console.log('Login successfull',res.profileObj);
        setAccount(res.profileObj);
    };
    const onLoginFailure = () =>{
        console.log('Login Failed');
    };
    return (
        <Dialog
        open={true}
        classes = {{paper:classes.dialogPaper}} 
        BackdropProps={{style:{backgroundColor:'unset'}}}       
        >
            <Box className={classname.component} >
                <Box className={classname.dialog}>
                    <Typography className={classname.title}>To use WhatsApp on your computer:</Typography>
                    <List className = {classname.list}>
                        <ListItem>1.Open WhatsApp on your phone</ListItem>
                        <ListItem>2.Tap Menu or settings and select linked Devices</ListItem>
                        <ListItem>3.Point your phone to this screen to capture the code</ListItem>
                    </List>
                </Box>
                <Box style = {{position:'relative'}}>
                    <img src={qrurl} alt='qr-code' className={classname.qr}/>
                    <Box style = {{position :'absolute',left:'50%',top:'50%'}}>
                        <GoogleLogin
                            clientId = {clientId}
                            isSignedIn={true}
                            buttonText=""
                            onSuccess={onLoginSuccess}
                            onFailure={onLoginFailure}
                            cookiePolicy={'single_host_origin'}
                        />
                    </Box>
                </Box>
            </Box>

        </Dialog>
    )
}

export default withStyles(style)(Login);
