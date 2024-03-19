import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { deleteCart, getallCart } from '../../Services/cartapi';

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
            fontSize: '20px'
        }
    },
    plates: {
        paddingLeft: '50px',
    }
})

// Display all Items in the JSON file
const MyCart = () => {

    const classes = useStyle();

    const [menu, setMenu] = useState([]);
    useEffect(() => {
        getMenu();
    }, [])

    const getMenu = async () => {
        const response = await getallCart();
        console.log(response);
        setMenu(response.data);
    }

    const deleteData = async (id) => {
        await deleteCart(id);
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
                    <TableCell>No of Plates</TableCell>
                    <TableCell>UserName</TableCell>
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
                            <TableCell className={classes.plates}>{data.plates}</TableCell>
                            <TableCell>{data.username}</TableCell>
                            <TableCell>
                                <Button variant="text" color="secondary" style={{ margin: '0px 20px' }} onClick={() => deleteData(data.id)}>Remove from Cart</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default MyCart;