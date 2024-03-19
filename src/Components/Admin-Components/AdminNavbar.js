import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

// Styling for the Navigations
const useStyles = makeStyles({
    main: {
        backgroundColor: '#f5f9ee'
    } ,
    header: {
        backgroundColor: 'black',
    },
    spacing :{
        paddingLeft: 50,
        color: '#fff',
        fontSize: '18px',
        textDecoration: 'none', 
    },
    spacingr :{
        paddingLeft: 0,
        color: '#fff',
        fontSize: '18px',
        textDecoration: 'none',
    },
    spacingnewuser :{
        paddingLeft: 70,
        color: '#fff',
        fontSize: '18px',
        textDecoration: 'none', 
    },
    spacingnewitem :{
        paddingLeft: 70,
        color: '#fff',
        fontSize: '18px',
        textDecoration: 'none', 
    },
    spacinglogout :{
        paddingLeft: 150,
        color: '#fff',
        fontSize: '25px',
        textDecoration: 'none', 
    },
    spacing2 :{
        paddingLeft: 50,
        color: '#fff',
        fontSize: '20px',
        textDecoration: 'none', 
    },
    spacing3 :{
        paddingLeft: 50,
        color: '#fff',
        fontSize: '20px',
        textDecoration: 'none', 
    }
  });
// Admin Navigations Method
const AdminNavbar = () => {
    const classes = useStyles();
    return (<>
        <AppBar className={classes.header} position="static">
            <Toolbar >
                <NavLink to="/allusers" className={classes.spacingr}> All users</NavLink>
                <NavLink to="/adduser" className={classes.spacingnewuser}> Adding new users</NavLink>                
                
                <NavLink to="/todaybill" className={classes.spacing3}>Todays BIll</NavLink>
                
                <NavLink to="/allmenu" className={classes.spacing}>All Items</NavLink>
                <NavLink to="/addmenu" className={classes.spacingnewitem}>Adding new items</NavLink>
                <NavLink to="/displaybill" className={classes.spacing2}>Monthly Sales</NavLink>
                <NavLink to="/" className={classes.spacinglogout}>Logout</NavLink>
            </Toolbar>
        </AppBar>
        <div className='main'></div>
        </>
    )
}

export default AdminNavbar;