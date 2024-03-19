import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import Navbar from '../Navbar';

// Styling for the Navigations
const useStyles = makeStyles({
    header: {
        backgroundColor: 'black',
    },
    spacing :{
        paddingLeft: 250,
        color: '#fff',
        fontSize: '20px',
        textDecoration: 'none', 
    },
    
    spacingr :{
        paddingLeft: 0,
        color: '#fff',
        fontSize: '20px',
        textDecoration: 'none',
    },
    spacinglogout :{
        paddingLeft: 300,
        color: '#fff',
        fontSize: '20px',
        textDecoration: 'none',
    },
    spacingnewuser :{
        paddingLeft: 50,
        color: '#fff',
        fontSize: '20px',
        textDecoration: 'none', 
    },
    spacingnewitem :{
        paddingLeft: 50,
        color: '#fff',
        fontSize: '20px',
        textDecoration: 'none', 
    }
  });
// Admin Navigations Method
const UserNavbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink to="/orderitems" className={classes.spacingr}>Order Items</NavLink>
                <NavLink to="/mycart" className={classes.spacingnewuser}>My Cart</NavLink>
                <NavLink to="/displayuserbill" className={classes.spacing}>Display Bills</NavLink>

                <NavLink to="/" className={classes.spacinglogout}>Logout</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default UserNavbar;