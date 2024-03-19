import '../../App.css';
import AdminNavbar from './AdminNavbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import AllUsers from '../User-Components/AllUsers';
import AddUser from '../User-Components/AddUser';
import EditUser from '../User-Components/EditUser';
import AllMenus from '../Items-Components/AllMenus';
import AddMenu from '../Items-Components/AddMenu';
import EditMenu from '../Items-Components/EditMenu';
import DisplayBill from '../User-Components/DisplayBill';
import TodaysBill from '../User-Components/TodaysBill';

function AdminPage() {
  return (
    <Router>
      <hr></hr>
      {/* The Apis to redirect ot the respective admin pages*/}
      <AdminNavbar/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/allusers" component={AllUsers} exact />
        <Route path="/displaybill" component={DisplayBill} exact />
        <Route path="/todaybill" component={TodaysBill} exact />
        <Route path="/adduser" component={AddUser} exact />
        <Route path="/allmenu" component={AllMenus} exact />
        <Route path="/addmenu" component={AddMenu} exact />
        <Route path="/edituser/:id" component={EditUser} exact />
        <Route path="/edititem/:id" component={EditMenu} exact />
      </Switch>
    </Router>
  );
}

export default AdminPage;

