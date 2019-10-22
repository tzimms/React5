import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';
import "./NavLink.css";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
              <div>
                <NavLink exact to="/"> Home </NavLink>
                <NavLink to="/our-history" activeClassName="active" > History </NavLink>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/our-history" component={History} />
                </Switch>
              </div>
            </BrowserRouter>
        );
    }
}

export default App;