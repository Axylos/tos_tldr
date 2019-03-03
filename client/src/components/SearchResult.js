import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ serviceResult : { service } }) => {
    return (
        <div>
            <Link to='/'>return home</Link>
            <Link to='/other-experiences'>See what others are saying about the {service.name} TOS</Link>
            <Link to='/review-service'>Review this service's TOS</Link>
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