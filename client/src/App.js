import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Home from './components/Home';
import OtherExperiences from './components/OtherExperiences';
import ReviewSvcForm from './components/ReviewSvcForm';
import SearchResult from './components/SearchResult';
import ShowService from './components/ShowService';
import { searchService } from './services/tos';
import Sandbox from './components/Sandbox';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    isCommenting: false,
    savedServices: [],
    serviceQuery: '',
    serviceResult: {},
    token: ''
  }

  setToken = token => {
    localStorage.setItem('token', token)
  }

  getToken = () => {
    const token = localStorage.getItem('token')
    this.setState({ token })
  }

  componentDidMount = () => {
    this.getToken()
  }

  handleSearchChange = e => { this.setState({ serviceQuery: e.target.value }) }

  handleSearchSubmit = async e => {
    const { serviceQuery } = this.state;
    e.preventDefault();
    try {
      const serviceResult = searchService(serviceQuery);
      this.setState({ serviceResult })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { savedServices, serviceQuery, serviceResult } = this.state;
    return (
      <BrowserRouter basename="/static/tos_tldr/index.html/">
        <div className="App">
          <h1>Tos tldr</h1>
          <div>the end</div>
        <Switch>
          <Route 
            exact path='/' 
            render={props => <Home {...props}
              savedServices={savedServices}
              handleSearchChange={this.handleSearchChange}
              handleSearchSubmit={this.handleSearchSubmit}
              serviceQuery={serviceQuery}
              serviceResult={serviceResult}
            />} 
          />
          <Route path='search-result' component={SearchResult} />
          <Route path='review-service' component={ReviewSvcForm} />
          <Route path='service' component={ShowService} />
          <Route path='other-experiences' component={OtherExperiences} />
          <Route path="/sandbox" component={Sandbox} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
