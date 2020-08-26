import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Header from './page/Header'
import Home from  './page/Home'
import About from  './page/About'
import Contact from  './page/Contact'
import Movies from  './page/Movies'
import MovieDetails from  './page/MoviesDetails'
import ErrorPage from  './page/ErrorPage'
import './App.css';

function App() {

  
  return (
        <Router>
          <Header />
        <Switch>
        <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/movie'>
            <Movies />
          </Route>
          <Route exact path='/movie/:gen/:id' children={<MovieDetails></MovieDetails>}>
            
          </Route>
          <Route exact path='*'>
            < ErrorPage/>
          </Route>
        </Switch>
        </Router>
  );
}

export default App;
