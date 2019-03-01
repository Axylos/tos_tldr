import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import OtherExperiences from './components/OtherExperiences';
import ReviewSvcForm from './components/ReviewSvcForm';
import SearchResult from './components/SearchResult';
import ShowService from './components/ShowService';
import { searchService } from './services/tos';
import Sandbox from './components/Sandbox';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

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
    this.setToken('305b9d34-e959-4d5c-98a9-1cdefb0fa8d0');
    this.getToken();
  }

  handleSearchChange = e => { this.setState({ serviceQuery: e.target.value }) }

  handleSearchSubmit = async e => {
    const { serviceQuery } = this.state;
    e.preventDefault();
    try {
      const serviceResult = await searchService(serviceQuery);
      this.setState({ serviceResult })
    } catch (error) {
      console.log(error)
    }
    return history.push('/search-result')
  }

  render() {
    const { savedServices, serviceQuery, serviceResult } = this.state;
    return (
      <Router history={history}>
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
          <Route 
            path='/search-result'
            component={props => <SearchResult {...props}
            serviceResult={serviceResult}
            />}
          />
          <Route path='/review-service' component={ReviewSvcForm} />
          <Route path='/service' component={ShowService} />
          <Route path='/other-experiences' component={OtherExperiences} />
          <Route path="/sandbox" component={Sandbox} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
