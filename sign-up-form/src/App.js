import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom"
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
function App() {
  return (
    <Router>
      <div className="App">

        <div className="App__Aside"></div>

        <div className="App__Form">

            <div className="pageSwitcher">

              <NavLink to="/sign-in" activeClassName="pageSwitcher__Item--Active" className="pageSwitcher__Item">Sign in</NavLink>

              <NavLink exact to="/" activeClassName="pageSwitcher__Item--Active" className="pageSwitcher__Item">Sign up</NavLink>

            </div>

            <div className="FormTitle">

              <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign in</NavLink> 
              or 
              <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign up</NavLink>

            </div>

          <Route exact path="/" component={SignUpForm}>
          </Route>

          <Route path="/sign-in" component={SignInForm}>
          </Route>

        </div>
        
      </div>

    </Router>
  );
}

export default App;
