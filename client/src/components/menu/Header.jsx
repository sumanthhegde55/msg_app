import React, { useState } from 'react'
import {Box, makeStyles} from '@material-ui/core'
import { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider'
import {Chat} from '@material-ui/icons'
import HeaderMenu from './HeaderMenu'
import Drawer from '../drawer/InfoDrawer'

const useStyles = makeStyles({
    header: {
        height: 35,
        background: '#ededed',
        display: 'flex',
        padding: '10px 16px',
        alignItems: 'center'
    },
    icons: {
        marginLeft: 'auto',
        '& > *': {
            marginLeft: 2,
            padding: 8,
            color: '#919191'
        },
        '& :first-child': {
            fontSize: 22,
            marginRight: 8,
            marginTop: 3
        }
    },
    avatar: {
        height: 37,
        width: 37,
        borderRadius: '50%'
    }
})

export const Header = () => {
    const {account} = useContext(AccountContext);
    const imgUrl = account.imageUrl;

    const [open,setOpen] = useState(false);
    const classes = useStyles();

    const toggleDrawer = () =>{
        setOpen(true);
    }
    return(
        <>
            <Box className = {classes.header}>
                <img src={imgUrl} onClick = {() => toggleDrawer()} alt="display-picture" className = {classes.avatar} />
                <Box className = {classes.icons}> 
                    <Chat/>
                    <HeaderMenu/>
                </Box>
            </Box>
            <Drawer open={open} setOpen={setOpen}/>
        </>
    )
}
export default Header;