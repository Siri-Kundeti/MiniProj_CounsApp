import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import AddStudent from './pages/admin/AddStudent';
import H1 from './pages/admin/H1';
import AddFaculty from './pages/admin/AddFaculty';
import ViewStudent from './pages/admin/ViewStudent';
import ActionStudent from './pages/admin/ActionStudent';
import AssignFaculty from './pages/admin/AssignFaculty';
import GenerateRList from './pages/admin/GenerateRList';
import ViewFaculty from './pages/admin/ViewFaculty';
import ModifyFaculty from './pages/admin/ModifyFaculty';
import H2 from './pages/faculty/H2';
import H3 from './pages/student/H3';
function App() {
  return (
   <div > 
      
      
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route path="/admin" element={<H1/>}/>
        <Route path="/faculty" element={<H2/>}/>
        <Route path="/student" element={<H3/>}/>
        <Route path="/addStudent" element={<AddStudent/>}/>
        <Route path="/addFaculty" element={<AddFaculty/>}/>
        <Route path="/viewStudent" element={<ViewStudent/>}/>
        <Route path="/actionStudent" element={<ActionStudent/>}/>
        <Route path="/assignFaculty" element={<AssignFaculty/>}/>
        <Route path="/generateRList" element={<GenerateRList/>}/>
        <Route path="/viewFaculty" element={<ViewFaculty/>}/>
        <Route path="/modifyFaculty" element={<ModifyFaculty/>}/>
      </Routes>
    </div>
  );
}

export default App;
