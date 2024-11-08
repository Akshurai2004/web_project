
import React from 'react';
import { blogData } from './blogData';
import BlogData from './components/BlogData';
import BlogCard from './components/BlogCard';

const BlogPage = () => {
    return (
        <div className="blog-page">
            <div className="header">
                <h1 className="header-title">Latest Blog</h1>
            </div>
            <div className="blog-cards-container">
                {blogData.map((blog, index) => (
                    <BlogCard
                        key={index}
                        title={blog.title}
                        summary={blog.summary}
                        details={blog.details}
                        date={blog.date}
                        author={blog.author}
                    />
                ))}
            </div>
            <div className="history-section">
                <h2>Our Hospital's History</h2>
                <img src="https://www.narayanahealth.org/sites/all/themes/nh/images/dev-shetty.jpg" alt="Founder Dr. Devi Shetty" />
                <p>
                    Founded in 2000 by renowned cardiac surgeon Dr. Devi Prasad Shetty, Narayana Health started with a vision to make healthcare accessible to people of all economic backgrounds. Dr. Shetty, known for his pioneering work in affordable healthcare, set up the first hospital in Bengaluru, India, focusing initially on cardiac care. Over the years, the hospital expanded its services to include orthopedics, neurology, oncology, and more, catering to a wide range of medical needs.
                </p>
                <p>
                    Narayana Health’s unique approach involved using economies of scale to bring down the cost of medical procedures. Today, it operates over 30 hospitals across India and has earned a global reputation for affordable, high-quality healthcare.
                </p>
            </div>
        </div>
    );
};

export default BlogPage;