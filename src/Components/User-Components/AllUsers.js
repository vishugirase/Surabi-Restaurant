import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { deleteUser, getallUsers } from '../../Services/userapi';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    table: {
        width: '80%',
        margin: '50px 100px 100px 140px',
    },
    thead: {
        '& > *': {
            background: 'green',
            color: 'white',
            fontSize: '20px'
        }
    },
    trow: {
        '& > *': {
            fontSize: '18px'
        }
    }
})

// Display all user in the JSON file
const AllUsers = () => {

    const classes = useStyle();
    const [user, setUser] = useState([]);
    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const response = await getallUsers();
        console.log(response);
        setUser(response.data);
    }

    const deleteData = async (id) => {
        await deleteUser(id);
        getUsers();
    }
    // Returns the HTML file for the respective method and the form for displaying the user details
    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Full Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    user.map((data) => (
                        <TableRow className={classes.trow}>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.username}</TableCell>
                            <TableCell>{data.email}</TableCell>
                            <TableCell>{data.phone}</TableCell>
                            <TableCell>
                                <Button variant="text" color="primary" style={{ margin: '0px 20px' }} component={Link} to={`/edituser/${data.id}`}>Edit</Button>
                                <Button variant="text" color="secondary" style={{ margin: '0px 20px' }} onClick={() => deleteData(data.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default AllUsers;
