import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { editMenu, getallMenu } from '../../Services/menuapi';
import { useHistory, useParams } from 'react-router-dom';

const initialValue = {
    itemname: "",
    price: "",
    type: "",
}

const EditMenu = () => {

    const [menu, setMenu] = useState(initialValue);
    const { itemname, price, type } = menu;

    const { id } = useParams();

    useEffect(() => {
        loadMenuData();
        // eslint-disable-next-line
    }, []);

    const loadMenuData = async () => {
        const response = await getallMenu(id);
        setMenu(response.data);
    }

    const history = useHistory();

    const onValueChange = (e) => {
        //  console.log(e);
        // console.log(e.target.value);
        setMenu({ ...menu, [e.target.name]: e.target.value });
        console.log(menu);
    }

    const editMenuDetails = async () => {
        await editMenu(id, menu);
        history.push('/allmenu');
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center">Update Menu Details</Typography>
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
                        <InputLabel>Type</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="type" value={type} />
                    </FormControl>

                    <Box my={3}>
                        <Button variant="text" onClick={() => editMenuDetails()} color="primary" align="center">Update</Button>
                        <Button onClick={() => history.push("/allmenu")} variant="text" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                    </Box>
                </FormGroup>
            </Box>
        </Container>
    )
}


export default EditMenu;