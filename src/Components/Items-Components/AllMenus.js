import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { deleteMenu, getallMenu } from '../../Services/menuapi';
import { Link } from 'react-router-dom';

// Styling and Decoration of the Naviagtions
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

// Display all Items in the JSON file
const AllMenus = () => {

    const classes = useStyle();

    const [menu, setMenu] = useState([]);
    useEffect(() => {
        getMenu();
    }, [])

    const getMenu = async () => {
        const response = await getallMenu();
        console.log(response);
        setMenu(response.data);
    }

    const deleteData = async (id) => {
        await deleteMenu(id);
        getMenu();
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>ItemName</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>ItemType</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    menu.map((data) => (
                        <TableRow className={classes.trow}>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.itemname}</TableCell>
                            <TableCell>Rs.{data.price}</TableCell>
                            <TableCell>{data.type}</TableCell>
                            <TableCell>
                                <Button variant="text" color="primary" style={{ margin: '0px 20px' }} component={Link} to={`/edititem/${data.id}`}>edit item</Button>
                                <Button variant="text" color="secondary" style={{ margin: '0px 20px' }} onClick={() => deleteData(data.id)}>delete item</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default AllMenus;
