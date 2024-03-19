import '../../App.css';
import UserNavbar from './UserNavbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import AllMenus from '../Items-Components/AllMenus';
import AddMenu from '../Items-Components/AddMenu';
import OrderItems from '../Order-Components/OrderItems';
import AddCart from '../Order-Components/AddCart';
import MyCart from '../Order-Components/MyCart';
import DisplayUserBill from './DisplayUserBill';

function UserPage() {
  return (
    <Router>
      <hr></hr>
      {/* The Apis to redirect ot the respective admin pages*/}
      <UserNavbar/>
      
      <Switch>
        <Route path="/" component={Home} exact />        
        {/* <Route path="/userpage" component={UserPage} exact /> */}
        <Route path="/allmenu" component={AllMenus} exact />
        <Route path="/addmenu" component={AddMenu} exact />
        <Route path="/orderitems" component={OrderItems} exact />
        <Route path="/displayuserbill" component={DisplayUserBill} exact />
        <Route path="/add-to-cart/:id" component={AddCart} exact />
        <Route path="/mycart" component={MyCart} exact />
      </Switch>
    </Router>
  );
}

export default UserPage;

