import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { getallMenu } from '../../Services/menuapi';
import { addCart } from '../../Services/cartapi';

import { useHistory, useParams } from 'react-router-dom';

const initialValue = {
    itemname: "",
    price: "",
    type: "",
    plates:"",
    date:"",
    username:""
}

const AddCart = () => {

    const [menu, setMenu] = useState(initialValue);
    const { itemname, price, type, plates, date, username } = menu;

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

    const Placeorder = async () => {
        alert('Item Added to Cart Succeffully')
        await addCart(menu);
        // history.push('/orderitems');
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center">No.of Plates  you want?</Typography>
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
                    <FormControl>
                        <InputLabel>No of Plates (integer only)</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="plates" value={plates} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Date(dd-mm-yyyy only)</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="date" value={date} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Username</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="username" value={username} />
                    </FormControl>

                    <Box my={3}>
                        <Button variant="text" onClick={() => Placeorder()} color="primary" align="center">Place Order</Button>
                        <Button onClick={() => history.push("/orderitems")} variant="text" color="secondary" align="center" style={{ margin: '0px 20px' }}>Back</Button>
                    </Box>
                </FormGroup>
            </Box>
        </Container>
    )
}


export default AddCart;





// import React, { useEffect, useState } from 'react';
// import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
// import { editMenu, getallMenu } from '../../Services/menuapi';
// import { useHistory, useParams } from 'react-router-dom';

// const initialValue = {
//     itemname: "",
//     price: "",
//     type: "",
// }

// const AddCart = () => {

//     const [menu, setMenu] = useState(initialValue);
//     const { itemname, price, type } = menu;

//     const { id } = useParams();

//     useEffect(() => {
//         loadMenuData();
//         // eslint-disable-next-line
//     }, []);

//     const loadMenuData = async () => {
//         const response = await getallMenu(id);
//         setMenu(response.data);
//     }

//     const history = useHistory();

//     const onValueChange = (e) => {
//         //  console.log(e);
//         // console.log(e.target.value);
//         setMenu({ ...menu, [e.target.name]: e.target.value });
//         console.log(menu);
//     }

//     const editMenuDetails = async () => {
//         await editMenu(id, menu);
//         history.push('/allmenu');
//     }

//     return (
//         <Container maxWidth="sm">
//             <Box my={5}>
//                 <Typography variant="h5" align="center">Update Menu Details</Typography>
//                 <FormGroup>
//                     <FormControl>
//                         <InputLabel>ItemName</InputLabel>
//                         <Input onChange={(e) => onValueChange(e)} name="itemname" value={itemname} />
//                     </FormControl>
//                     <FormControl>
//                         <InputLabel>Price</InputLabel>
//                         <Input onChange={(e) => onValueChange(e)} name="price" value={price} />
//                     </FormControl>
//                     <FormControl>
//                         <InputLabel>Type</InputLabel>
//                         <Input onChange={(e) => onValueChange(e)} name="type" value={type} />
//                     </FormControl>

//                     <Box my={3}>
//                         <Button variant="text" onClick={() => editMenuDetails()} color="primary" align="center">Update</Button>
//                         <Button onClick={() => history.push("/allmenu")} variant="text" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
//                     </Box>
//                 </FormGroup>
//             </Box>
//         </Container>
//     )
// }


// export default AddCart;