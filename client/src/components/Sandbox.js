import React from 'react';
import { 
  createExperience,
  createComment,
  getExperience,
  getServiceExperiences,
  getUserExperiences,
} from '../services/tos';

class Sandbox extends React.Component {
  async componentDidMount() {
    const exp = {
      service_name: 'google',
      reading_level: 'read',
      review: 'omg'
    };
    const data = await getServiceExperiences('google');

    console.log(data);
  }

  render() { 
    return (
      <div>
        <h1>Sandbox</h1>
      </div>
    );
  }
}

export default Sandbox;
