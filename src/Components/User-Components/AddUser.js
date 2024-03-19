import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addUser } from '../../Services/userapi';
import { useHistory } from 'react-router-dom';

const initialValue = {
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
}

// Method for Adding the New User
const AddUser = () => {

    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone, password } = user;
    const history = useHistory();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    const addUserDetails = async () => {
        await addUser(user);
        history.push('/allusers');
    }
    // Return the HTML file for the respective method and the form for adding the New User
    return (
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center">Adding User Details</Typography>
                <FormGroup>
                    <FormControl>
                        <InputLabel>Name</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>User Name</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="username" value={username} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Email address</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="email" value={email} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Phone Number</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Password</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="password" type="password" value={password} />
                    </FormControl>
                    <Box my={3}>
                        <Button variant="text" onClick={() => addUserDetails()} color="primary" align="center">Adding User</Button>
                        <Button onClick={() => history.push("/allusers")} variant="text" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                    </Box>
                </FormGroup>
            </Box>
        </Container>
    )
}
export default AddUser;