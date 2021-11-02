import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./Header";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { Posts } from "./Pages/Posts";

export default function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact  path="/about">
            <About />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
