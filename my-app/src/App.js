import './App.css';
import React from 'react';
import {BrowserRouter as Router,Switch, Route,Link} from "react-router-dom"
import Login from './components/Login';
import Register from './components/Register';
import Quote from './components/Quote';


function App() {
  return (

    <Router>
     <div>
      <ul>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/register">Signup</Link>
        </li>
        {/* <li>
          <Link to="/quote">Quote</Link>
        </li> */}
      </ul>
    </div>
   
   <Switch>
    <Route exact path="/login"><Register></Register></Route>
    <Route exact path="/register"><Login></Login></Route>
    <Route exact path="/quote"><Quote></Quote></Route>

   </Switch>
    </Router>
   
    
  );
}

export default App;
