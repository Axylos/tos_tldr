import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import OtherExperiences from './components/OtherExperiences';
import ReviewSvcForm from './components/ReviewSvcForm';
import SearchResult from './components/SearchResult';
import ShowService from './components/ShowService';
import {
  searchService,
  getUserExperiences,
  createExperience,
  getExperience
 } from './services/tos';
import Sandbox from './components/Sandbox';
import { withRouter, Route, Switch, Router } from 'react-router-dom';

class App extends Component {
  state = {
    isCommenting: false,
    savedServices: [],
    serviceQuery: '',
    serviceResult: {},
    token: '',
    userExperiences: '',
    reading_level: '',
    review: '',
    experience: ''
  }

  setToken = token => {
    localStorage.setItem('token', token)
  }

  getToken = () => {
    const token = localStorage.getItem('token')
    this.setState({ token })
  }

  setExperiences = async () => {
    const userExperiences = await getUserExperiences();
    this.setState({ userExperiences });
  }

  componentDidMount = () => {
    this.setToken('305b9d34-e959-4d5c-98a9-1cdefb0fa8d0');
    this.getToken();
    this.setExperiences();
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
    return this.props.history.push('/search-result')
  }

  handleReviewChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  handleReviewSubmit = async e => {
    const { reading_level, review, serviceResult: { service: { name }}} = this.state;
    e.preventDefault();
    const reviewPostBody = {
      reading_level,
      review,
      service_name: name
    }
    try {
      const newExp = await createExperience(reviewPostBody);
      const { experience: { id } } = newExp;
      this.getExperienceToShow(id);
      return this.props.history.push('/service');
    } catch (error) {
      console.log(error);
    }
  }

  getExperienceToShow = async id => {
    try {
      const experience = await getExperience(id);
      this.setState({ experience });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      savedServices,
      serviceQuery,
      serviceResult,
      reading_level,
      review,
      experience
    } = this.state;

    return (
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
          <Route
            path='/review-service'
            render={props => <ReviewSvcForm {...props}
              serviceResult={serviceResult}
              reading_level={reading_level}
              review={review}
              handleReviewChange={this.handleReviewChange}
              handleReviewSubmit={this.handleReviewSubmit}
            />}
          />
          <Route
            path='/service'
            render={props => <ShowService {...props}
              experience={experience}
            />}
          />
          <Route path='/other-experiences' component={OtherExperiences} />
          <Route path="/sandbox" component={Sandbox} />
        </Switch>
        </div>
    );
  }
}

export default withRouter(App);
