import React, { useState } from 'react';
import { Container, makeStyles , Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addUser } from '../../Services/userapi';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles({
    register: {
        backgroundColor: '#feffdf'
    }
})

const initialValue = {
    name: "",
    username: "",
    password: "",
    email: "",
    phone: "",
}

const UserRegister = () => {
    const classes = useStyle();
    const [user, setUser] = useState(initialValue);
    const { name, username, password, email, phone } = user;

    const history = useHistory();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    const addUserDetails = async () => {
        await addUser(user);
        history.push('/userreg');
    }

    return (
        <Container className={classes.register} maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center">Registration Form</Typography>
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
                        <InputLabel>Password</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="password" value={password} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Email address</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="email" value={email} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Phone Number</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} />
                    </FormControl>
                    <Box my={3}>
                        <Button variant="text" onClick={() => addUserDetails()} color="primary" align="center">Register</Button>
                        <Button onClick={() => history.push("/userreg")} variant="text" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                        <br></br><br></br>
                        Already Registered ? Please Login <Button variant="contained" onClick={() => history.push("/login")} color="primary" align="center">Login</Button>
                    </Box>
                </FormGroup>
            </Box>
        </Container>
    )
}


export default UserRegister;