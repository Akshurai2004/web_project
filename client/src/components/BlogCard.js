// BlogCard.js
import React, { useState } from 'react';

const BlogCard = ({ title, summary, details, date, author }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="blog-card">
            <h3>{title}</h3>
            <p>{summary}</p>
            {showDetails && <p>{details}</p>}
            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Read Less' : 'Read More'}
            </button>
            <div className="blog-footer">
                <span>By {author}</span> | <span>{date}</span>
            </div>
        </div>
    );
};

export default BlogCard;