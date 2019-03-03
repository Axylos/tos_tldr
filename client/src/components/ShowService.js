import React from 'react';
import AddCommentForm from './AddCommentForm';

const ShowService = ({ experience }) => {
    return (
        <div>
            {experience &&
                <div>
                    <h1>{experience.experience.name}</h1>
                    <div>{experience.experience.reading_level}</div>
                    <div>{experience.experience.review}</div>
                </div>
            }

            <AddCommentForm />
        </div>
    );
};

export default ShowService;