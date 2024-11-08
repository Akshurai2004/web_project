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
    details: 'Maintaining gut health during the festive season can be a challenge, but with the right strategies, you can enjoy the celebrations without compromising your digestive well-being. Discover practical tips to support your gut microbiome and prevent common issues like bloating, indigestion, and food sensitivities.'
  },
  {
    id: 2,
    title: 'Palliative Care in Intensive Care Units',
    author: 'Allien J',
    date: 'Sep 26, 2024',
    brief: 'A comprehensive guide on palliative care in ICU settings...',
    details: 'Palliative care plays a crucial role in improving the quality of life for critically ill patients in intensive care units. This guide delves into the principles of palliative care in the ICU, exploring the interdisciplinary approach, symptom management, and the importance of effective communication with patients and their families.'
  },
  {
    id: 3,
    title: 'Important Gynaecologic Cancers: Symptoms, Prevention',
    author: 'Narayana Health',
    date: 'Sep 21, 2024',
    brief: 'Three important cancers every woman should know about...',
    details: 'Gynaecologic cancers, such as cervical, ovarian, and endometrial cancer, pose significant health risks for women. This comprehensive guide outlines the key symptoms to be aware of, as well as effective prevention strategies, including regular screenings and lifestyle modifications, to empower women in taking charge of their reproductive health.'
  },
  {
    id: 4,
    title: 'Best Diet for Hypothyroidism: Foods to Eat & Avoid',
    author: 'Dr. Hridhish Narayan Chakravarti',
    date: 'Jul 19, 2024',
    brief: 'Explore the best foods to include in your diet for hypothyroidism...',
    details: 'Hypothyroidism, a condition characterized by an underactive thyroid gland, can be managed through dietary modifications. This guide delves into the specific nutrients and food groups that can help support thyroid function, as well as those that should be limited or avoided to optimize thyroid health and manage symptoms.'
  },
  {
    id: 5,
    title: 'Navigating the Challenges of Alzheimers Disease',
    author: 'Dr. Amelia Sharma',
    date: 'Jun 12, 2024',
    brief: 'Discover effective strategies for supporting loved ones with Alzheimers...',
    details: 'Alzheimers disease can present significant emotional and practical challenges for both patients and their caregivers. This guide offers in-depth insights into managing the cognitive and emotional complexities of the disease, including practical tips for creating a nurturing environment and accessing crucial resources to support loved ones with Alzheimer\'s.'
  },
  {
    id: 6,
    title: 'Mastering Mindfulness: A Path to Inner Peace',
    author: 'Lila Chakrabarti',
    date: 'May 28, 2024',
    brief: 'Explore the transformative power of mindfulness practices...',
    details: 'Mindfulness meditation has been shown to offer a wealth of benefits, from reduced stress and improved focus to enhanced overall well-being. This guide delves into the science-backed advantages of mindfulness and provides practical techniques to help readers cultivate a regular practice, unlock the path to inner peace, and integrate mindfulness into their daily lives.'
  },
  {
    id: 7,
    title: 'The Importance of Regular Eye Exams',
    author: 'Dr. Rohan Gupta',
    date: 'Apr 15, 2024',
    brief: 'Dont overlook the significance of routine eye checkups...',
    details: 'Regular eye exams play a crucial role in maintaining optimal visual health and detecting potential issues early on. This guide emphasizes the essential benefits of comprehensive eye care, including the ability to identify vision problems, eye diseases, and underlying health conditions that may be affecting one\'s eyesight. Readers will learn why routine eye checkups should be a priority for maintaining long-term eye health.'
  },
  {
    id: 8,
    title: 'Overcoming the Stigma of Mental Illness',
    author: 'Priya Agarwal',
    date: 'Mar 29, 2024',
    brief: 'Empowering insights to break the silence around mental health...',
    details: 'Addressing the pervasive stigma surrounding mental illness is a critical step in creating a more inclusive and supportive environment for those seeking mental health support. This guide explores strategies to challenge misconceptions, foster open conversations, and empower individuals to access the care and resources they need without fear of judgment or discrimination.'
  },
  {
    id: 9,
    title: 'The Benefits of a Plant-Based Diet',
    author: 'Dr. Meera Kapoor',
    date: 'Feb 11, 2024',
    brief: 'Discover the power of a plant-forward approach to nutrition...',
    details: 'Adopting a plant-based diet has been shown to offer a wealth of health benefits, from reduced risk of chronic diseases to improved overall well-being. This guide delves into the scientific evidence supporting the advantages of a plant-forward approach to nutrition, while also highlighting a diverse array of wholesome, nutrient-rich foods that can be incorporated into a balanced, plant-based lifestyle.'
  },
  {
    id: 10,
    title: 'Navigating the Complexities of Sleep Disorders',
    author: 'Dr. Aditya Chatterjee',
    date: 'Jan 5, 2024',
    brief: 'Unlock the secrets to better sleep and improved health...',
    details: 'Sleep disorders can have a significant impact on physical and mental well-being, but there are effective strategies available to identify, manage, and overcome these challenges. This guide provides a comprehensive overview of the various types of sleep disorders, their potential consequences, and evidence-based approaches to achieving more restful and rejuvenating slumber for improved overall health and quality of life.'
  }
];



const BlogList = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openBlogDetail = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeBlogDetail = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
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

      {isModalOpen && (
        <div className="modal-backdrop" onClick={closeBlogDetail}>
          <div className="blog-detail-modal">
            <BlogDetail blog={selectedBlog} onClose={closeBlogDetail} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogList;