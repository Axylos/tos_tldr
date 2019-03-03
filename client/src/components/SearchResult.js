import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ serviceResult : { service } }) => {
    // const { name, points } = service;
    return (
        <div>
            <Link to='/'>return home</Link>
            <h1>{service && service.name}</h1>
            {service && service.points.map(point => (
                <div key={point.id}>
                    <div>{point.discussion}</div>
                    <div dangerouslySetInnerHTML={{ __html: point.quoteText }}/>
                </div>
            ))}
        </div>
    );
};

export default SearchResult;