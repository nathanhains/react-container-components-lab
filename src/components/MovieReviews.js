import React from 'react'
const MovieReview = ({reviews}) => <ul className="review-list">
    {reviews.map(review => <li key={review.display_title} className="review"><h1>{review.display_title}</h1><h2>{review.byline}</h2><h3>{review.summary_short}</h3></li>)}
</ul>
export default MovieReview
