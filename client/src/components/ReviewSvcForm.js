import React from 'react';

const ReviewSvcForm = ({
    serviceResult: { service },
    handleReviewChange,
    handleReviewSubmit,
    reading_level,
    review
}) => {
    return (
        <div>
            <h1>Post a review for {service.name}'s TOS:</h1>
            <form onSubmit={handleReviewSubmit}>
                <label>Did you read {service.name}'s TOS?</label>
                <select value={reading_level} name='reading_level' onChange={handleReviewChange}>
                    <option value='read_nq'>I read it and understood it</option>
                    <option value='read_q'>I read it but didn't understand it</option>
                    <option value='not_read'>I didn't read it</option>
                </select>
                <textarea value={review} name='review' onChange={handleReviewChange} />
                <input type='submit' value='Submit'></input>
            </form>
        </div>
    );
};

export default ReviewSvcForm;