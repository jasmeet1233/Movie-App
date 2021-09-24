import React, { useState } from "react";
// import MoviesList from "./MoviesList";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./pages/Home";
import SingleMoviePage from "./pages/SingleMoviePage";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path = '/'>
          <Home />
        </Route>
        <Route path = '/:id'>
          <SingleMoviePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
