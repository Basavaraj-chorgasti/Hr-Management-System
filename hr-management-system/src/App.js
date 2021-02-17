import logo from './logo.svg';
import './App.css';
import AppComponent from './components/AppComponent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom'
import Employee from './components/Employee';
import Organization from './components/Organization';
import Role from './components/Role';
import Home from './components/Home';
import AddEmployee from './components/AddEmployee'
import  AddRole  from "./components/AddRole";
import AddOrganization from './components/AddOrganization'
function App() {
  return (
    // <AppComponent/>
    <div className="container" >
           <BrowserRouter>
          <div>
          <NavLink style={{textDecoration:"none",color:"black"}} to='/'> <img src="hrms.jpg" style={{float:"left"}} width="50px" height="40px"/></NavLink>
          <ul>
          <li><NavLink  style={{textDecoration:"none",color:"black"}} to='/Employee'> Employee</NavLink></li>
          <li><NavLink style={{textDecoration:"none",color:"black"}} to='/Role'>Role</NavLink></li>
          <li><NavLink style={{textDecoration:"none",color:"black"}} to='/Organization'> Organization </NavLink></li>
        
              </ul>
          </div>
          <Switch>
          <Route path='/' exact component={Home}></Route> 
          <Route path='/Employee' exact component={Employee}></Route> 
          <Route path='/Role' exact component={Role}></Route> 
          <Route path='/Organization' exact component={Organization}></Route> 
          <Route path='/AddEmployee' exact component={AddEmployee}></Route>
          <Route path='/AddRole' exact component={AddRole}></Route>
          <Route path='/AddOrganization' exact component={AddOrganization}></Route>


          
         
          </Switch>
          </BrowserRouter>
         
        </div>
  );
}

export default App;
