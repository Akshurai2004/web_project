// src/components/BlogDetail.js

import React from 'react';

const BlogDetail = ({ blog, closeBlogDetail }) => {
  return (
    <div className="blog-detail-modal">
      <button onClick={closeBlogDetail}>Close</button>
      <h2>{blog.title}</h2>
      <p><strong>Author:</strong> {blog.author}</p>
      <p><strong>Date:</strong> {blog.date}</p>
      <p>{blog.details}</p>
    </div>
  );
};

export default BlogDetail;