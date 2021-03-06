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
  getExperience,
  getServiceExperiences
 } from './services/tos';
import Sandbox from './components/Sandbox';
import { withRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    isCommenting: false,
    serviceQuery: '',
    serviceResult: {},
    token: '',
    userExperiences: '',
    reading_level: '',
    review: '',
    experience: '',
    experiences: ''
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
    const { history } = this.props;
    e.preventDefault();
    try {
      const serviceResult = await searchService(serviceQuery);
      this.setState({ serviceResult });
    } catch (error) {
      console.log(error);
    }
    return history.push('/search-result');
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
      const { history } = this.props;
      this.getExperienceToShow(id);
      return history.push('/service');
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

  getOthersExperiences = async () => {
    const { serviceQuery } = this.state;
    try {
      const experiences = await getServiceExperiences(serviceQuery);
      this.setState({ experiences });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      userExperiences,
      serviceQuery,
      serviceResult,
      reading_level,
      review,
      experience,
      experiences,
    } = this.state;

    return (
        <div className="App">
          <h1>Tos tldr</h1>
        <Switch>
          <Route 
            exact path='/' 
            render={props => <Home {...props}
              userExperiences={userExperiences}
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
            getOthersExperiences={this.getOthersExperiences}
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
          <Route
            path='/other-experiences'
            render={props => <OtherExperiences {...props}
              experiences={experiences}
            />}
          />
          <Route path="/sandbox" component={Sandbox} />
        </Switch>
        </div>
    );
  }
}

export default withRouter(App);
