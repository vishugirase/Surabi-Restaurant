import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addMenu } from '../../Services/menuapi';
import { useHistory } from 'react-router-dom';

const initialValue = {
    itemname: "",
    price: "",
    type: "",
}

// Method to add Menu Items
const AddMenu = () => {
    const [menu, setMenu] = useState(initialValue);
    const { itemname, price, type } = menu;
    const history = useHistory();
    const onValueChange = (e) => {
        setMenu({ ...menu, [e.target.name]: e.target.value });
        console.log(menu);
    }
    const addMenuDetails = async () => {
        await addMenu(menu);
        history.push('/allmenu');
    }
    // Return the HTML file for the respective method and the form for adding the Menu items
    return (
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center">Adding Menu Details</Typography>
                <FormGroup>
                    <FormControl>
                        <InputLabel>ItemName</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="itemname" value={itemname} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Price</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="price" value={price} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>ItemType</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="type" value={type} />
                    </FormControl>

                    <Box my={3}>
                        <Button variant="text" onClick={() => addMenuDetails()} color="primary" align="center">Adding New Item</Button>
                        <Button onClick={() => history.push("/allmenu")} variant="text" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                    </Box>
                </FormGroup>
            </Box>
        </Container>
    )
}


export default AddMenu;