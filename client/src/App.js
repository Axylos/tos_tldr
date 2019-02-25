import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import OtherExperiences from './components/OtherExperiences';
import ReviewSvcForm from './components/ReviewSvcForm';
import SearchResult from './components/SearchResult';
import ShowService from './components/ShowService';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Tos tldr</h1>
          <div>the end</div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='search-result' component={SearchResult} />
          <Route path='review-service' component={ReviewSvcForm} />
          <Route path='service' component={ShowService} />
          <Route path='other-experiences' component={OtherExperiences} />
        </Switch>
        </div>
      </ BrowserRouter>
    );
  }
}

export default App;
