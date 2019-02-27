import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
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

  handleSearchChange = e => this.setState({ serviceQuery: e.target.value })

  handleSearchSubmit = async () => {
    try {
      const serviceResult = axios('https://tosdr.org/api/1/service')
      //header here?
      this.setState({ serviceResult })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { savedServices, serviceQuery, serviceResult } = this.state;
    return (
      <BrowserRouter>
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
              serviceResult={serviceResult}
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
