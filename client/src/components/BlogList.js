// src/components/BlogList.js

import React, { useState } from 'react';
import BlogDetail from './BlogDetail';

const blogs = [
  {
    id: 1,
    title: 'How to Maintain Gut Health During Celebrations',
    author: 'Narayana Health',
    date: 'Sep 27, 2024',
    brief: 'Gearing up for festive season? Learn how to maintain your gut health...',
    details: ''
  },
  {
    id: 2,
    title: 'Palliative Care in Intensive Care Units',
    author: 'Allien J',
    date: 'Sep 26, 2024',
    brief: 'A comprehensive guide on palliative care in ICU settings...',
    details: 'Detailed content about palliative care in ICU...'
  },
  {
    id: 3,
    title: 'Important Gynaecologic Cancers: Symptoms, Prevention',
    author: 'Narayana Health',
    date: 'Sep 21, 2024',
    brief: 'Three important cancers every woman should know about...',
    details: 'Detailed content about gynaecologic cancers...'
  },
  {
    id: 4,
    title: 'Best Diet for Hypothyroidism: Foods to Eat & Avoid',
    author: 'Dr. Hridhish Narayan Chakravarti',
    date: 'Jul 19, 2024',
    brief: 'Explore the best foods to include in your diet for hypothyroidism...',
    details: 'Detailed content about diet for hypothyroidism...'
  },
  // Add more blogs here
];

const BlogList = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const openBlogDetail = (blog) => {
    setSelectedBlog(blog);
  };

  const closeBlogDetail = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="blog-list-container">
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card" onClick={() => openBlogDetail(blog)}>
            <h3>{blog.title}</h3>
            <p>{blog.brief}</p>
            <span>{blog.author} - {blog.date}</span>
          </div>
        ))}
      </div>
      
      {selectedBlog && <BlogDetail blog={selectedBlog} closeBlogDetail={closeBlogDetail} />}
    </div>
  );
};

export default BlogList;