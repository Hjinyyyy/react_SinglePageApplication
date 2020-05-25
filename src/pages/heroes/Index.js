import React from 'react';
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import Heroes from "./Heroes";
import {Register} from "./Register";
import {Nav, NavItem} from "reactstrap";
import './Index.scss';

export const Index = (props) => {
  return (
    <>
      <Nav className="mb-3">
        <NavItem>
          <NavLink to="/react_SinglePageApplication/heroes/hero" className="nav-link">Hero List</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/react_SinglePageApplication/heroes/register" className="nav-link">Register</NavLink>
        </NavItem>
      </Nav>
      <Switch>
        <Route path="/react_SinglePageApplication/heroes/hero" component={Heroes}></Route>
        <Route path="/react_SinglePageApplication/heroes/register" component={Register}></Route>
        <Route path="/react_SinglePageApplication/heroes" render={() => <Redirect to="/react_SinglePageApplication/heroes/hero" />} />
      </Switch>
    </>
  )
}
