import React, { Component } from 'react'
import './App.css';
import Movies from './components/movies'
import Counters from './components/counters';
import NavBar from './components/navbar'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Customers } from './components/customers';
import { Rentals } from './components/rentals';
import NotFound from './components/notFound';

class App extends Component{
  
   
  render(){
      return (
        <React.Fragment>
        <NavBar />
          <main className="container">
            <Switch>
              <Route path="/customers" component={Customers} />
              <Route path="/rentals" component={Rentals} />
              <Route path="/movies" component={Movies} />
              <Route path="/not-found" component={NotFound} />
              <Redirect from="/" exact to="/movies" />
              <Redirect to="/not-found" />
            </Switch>
        </main>
        </React.Fragment>
      );
  }
}

export default App;
