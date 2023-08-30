import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoanEligibilityForm from './components/LoanEligibilty';
import Admin from './components/admin/AdminPage';
import CustomerList from './components/admin/CustomerList';
import AddUser from './components/admin/AddUser';

// ...

function App() {
  return (
    
      <div className="App">
        <Navbar />
        
        <Routes>

          <Route path='/' element={<Home/>} />

          <Route path='/eligibilty' element={ <LoanEligibilityForm /> } />

          <Route path='/admin' element={ <Admin /> } />

          <Route path='/customerlist' element={ <CustomerList /> } />
          <Route path='/adduser' element={ <AddUser /> } />
         
        </Routes>
      </div>
   
  );
}

// ...
export default App;