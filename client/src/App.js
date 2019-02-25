import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import OtherExperiences from './components/OtherExperiences';
import ReviewSvcForm from './components/ReviewSvcForm';
import SearchResult from './components/SearchResult';
import ShowService from './components/ShowService';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    isCommenting: false,
    savedServices: [],
    serviceQuery: '',
    serviceSearchResult: {}
  }

  handleSearchChange = e => this.setState({ serviceQuery: e.target.value })

  render() {
    const { savedServices, serviceQuery } = this.state;
    return (
      <BrowserRouter basename="/static/tos_tldr/index.html/>
        <div className="App">
          <h1>Tos tldr</h1>
          <div>the end</div>
        <Switch>
          <Route 
            exact path='/' 
            component={props => <Home {...props}
              savedServices={savedServices}
              handleSearchChange={this.handleSearchChange}
              handleSearchSubmit={this.handleSearchSubmit}
              serviceQuery={serviceQuery}
            />} 
          />
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
