import React from 'react';
import { createExperience } from '../services/tos';

class Sandbox extends React.Component {
  async componentDidMount() {
    const exp = {
      service_name: 'google',
      reading_level: 'not_read',
      review: 'omg'
    };
    const data = await createExperience(exp);

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
