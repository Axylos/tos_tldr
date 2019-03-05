import React from 'react';

const OtherExperiences = ({ experiences }) => {
    return (
        <div>
            <h1>Others' experiences</h1>
            {experiences && experiences.results.map(experience => (
                <div key={experience.id}>
                    <div>{experience.user_id}</div>
                    <div>{experience.reading_level}</div>
                </div>
            ))}
        </div>
    );
};

export default OtherExperiences;