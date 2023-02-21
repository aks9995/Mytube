import './App.css';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import AllUsers from './components/AllUsers';
import Navbar from './components/Navbar';
import UserManagementSys from './components/UserManagementSys';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <Navbar />
     <Routes>
     <Route path="/" element={ <UserManagementSys />} />
     <Route path="/all" element={ <AllUsers />} />
     <Route path="/add" element={ <AddUser />} />
     <Route path="/edit/:id" element={ <EditUser />} />
     </Routes>
    </BrowserRouter>

  );
}

export default App;
