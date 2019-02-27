import React from 'react';

const Home = ({ 
        savedServices, 
        handleSearchSubmit, 
        handleSearchChange,
        serviceQuery
    }) => {
    return (
        <div className='home-container'>
            <div className='my-services-container'>
                <h1>My services:</h1>
                <ul>
                    {savedServices.map(service => <li>{service.name}</li>)}
                </ul>
            </div>
            <div className='search-container'>
                <form onSubmit={handleSearchSubmit} >
                    <label>
                        Search Term
                    </label>
                    <input
                        onChange={handleSearchChange} 
                        value={serviceQuery}
                    />
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        </div>
    );
};

export default Home;