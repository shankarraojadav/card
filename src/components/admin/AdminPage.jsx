
import { Link } from 'react-router-dom';

// import AddUser from './AddUser'; // Import your AddUser component
// import CustomerList from './CustomerList'; // Import your CustomerList component
import "../../css/AdminPage.css";
import { Button } from '@mui/material';

function Admin() {
  return (
    <div className="admin-page-container">
      <Button><Link to="/customerlist">Customer List</Link></Button>
      <Button><Link to="/adduser">Add User</Link></Button>
    </div>
  );
}

export default Admin;
