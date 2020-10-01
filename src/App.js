import React from "react";

import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Read from "./Pages/Read";
import Profile from "./Pages/Profile";
import Library from "./Pages/MyLibrary";
import AddBook from "./Pages/AddBook";
import Admin from "./Pages/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/read" component={Read} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/library" component={Library} />
        <Route exact path="/addBook" component={AddBook} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
}
