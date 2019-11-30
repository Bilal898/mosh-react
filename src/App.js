import React, { Component } from 'react'
import './App.css';
import Movies from './components/movies'
import Counters from './components/counters';
import NavBar from './components/navbar'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Customers } from './components/customers';
import { Rentals } from './components/rentals';
import NotFound from './components/notFound';
import { MovieForm } from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import NewMovieForm from './components/newMovieForm';

class App extends Component{
  
   
  render(){
      return (
        <React.Fragment>
        <NavBar />
          <main className="container">
            <Switch>
              <Route exact path="/customers" component={Customers} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/register" component={RegisterForm} />
              <Route exact path="/rentals" component={Rentals} />
              <Route exact path="/movies/new" component={NewMovieForm} />
              <Route exact path="/movies/:id" component={MovieForm} />
              <Route exact path="/movies" component={Movies} />
              <Route exact path="/not-found" component={NotFound} />
              <Redirect from="/" exact to="/movies" />
              <Redirect to="/not-found" />
            </Switch>
        </main>
        </React.Fragment>
      );
  }
}

export default App;
