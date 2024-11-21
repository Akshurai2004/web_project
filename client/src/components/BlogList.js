

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
  ,
    {
      id: 11,
      title: 'Understanding Diabetes Management in Children',
      author: 'Dr. Rajesh Kumar',
      date: 'Sep 25, 2024',
      brief: 'Essential guidelines for managing pediatric diabetes...',
      details: 'Managing diabetes in children requires a unique approach that considers their growing bodies, changing hormones, and lifestyle needs. This comprehensive guide explores effective strategies for blood sugar monitoring, insulin management, dietary considerations, and the importance of family support in helping children with diabetes thrive while maintaining an active, healthy lifestyle.'
    },
    {
      id: 12,
      title: 'Heart Health: Prevention Through Lifestyle Changes',
      author: 'Dr. Sanjay Mehta',
      date: 'Sep 20, 2024',
      brief: 'Discover key lifestyle modifications for a healthier heart...',
      details: 'Cardiovascular health can be significantly improved through targeted lifestyle modifications. This in-depth guide examines evidence-based strategies for heart disease prevention, including dietary recommendations, exercise guidelines, stress management techniques, and the importance of regular health screenings in maintaining optimal heart function and reducing risk factors.'
    },
    {
      id: 13,
      title: 'Managing Chronic Pain: Holistic Approaches',
      author: 'Dr. Priya Sharma',
      date: 'Sep 15, 2024',
      brief: 'Explore comprehensive strategies for chronic pain management...',
      details: 'Chronic pain management requires a multifaceted approach that addresses both physical and psychological aspects of pain. This guide explores various holistic treatment options, including physical therapy, mindfulness techniques, alternative therapies, and lifestyle modifications that can help individuals better manage chronic pain and improve their quality of life.'
    },
    {
      id: 14,
      title: 'Nutrition for Optimal Athletic Performance',
      author: 'Dr. Vikram Singh',
      date: 'Sep 10, 2024',
      brief: 'Essential nutritional guidelines for athletes and active individuals...',
      details: 'Proper nutrition plays a crucial role in athletic performance and recovery. This comprehensive guide outlines key nutritional strategies for athletes, including macronutrient balance, timing of meals, hydration requirements, and supplementation considerations to help optimize training results and enhance overall athletic performance.'
    },
    {
      id: 15,
      title: 'Understanding Autoimmune Disorders',
      author: 'Dr. Anita Desai',
      date: 'Sep 5, 2024',
      brief: 'A comprehensive look at autoimmune conditions and management...',
      details: 'Autoimmune disorders present unique challenges in both diagnosis and treatment. This detailed guide explores the mechanisms behind autoimmune conditions, common symptoms, diagnostic approaches, and various management strategies, including medical treatments, dietary modifications, and lifestyle changes that can help individuals better cope with autoimmune disorders.'
    },
    {
      id: 16,
      title: 'Pregnancy and Mental Health',
      author: 'Dr. Maya Reddy',
      date: 'Aug 30, 2024',
      brief: 'Supporting mental wellness during pregnancy and postpartum...',
      details: 'Mental health during pregnancy and the postpartum period requires special attention and care. This guide discusses common mental health challenges faced during pregnancy, including anxiety and depression, while offering practical strategies for emotional well-being, seeking support, and maintaining mental health throughout the maternal journey.'
    },
    {
      id: 17,
      title: 'Environmental Health: Impact on Well-being',
      author: 'Dr. Arjun Kapoor',
      date: 'Aug 25, 2024',
      brief: 'Understanding how environmental factors affect our health...',
      details: 'Environmental factors play a significant role in our overall health and well-being. This comprehensive guide examines the various ways environmental conditions impact our health, from air quality and water safety to chemical exposures and climate change, while providing practical tips for minimizing environmental health risks in daily life.'
    },
    {
      id: 18,
      title: 'Bone Health Across the Lifespan',
      author: 'Dr. Nisha Patel',
      date: 'Aug 20, 2024',
      brief: 'Essential strategies for maintaining strong bones at every age...',
      details: 'Maintaining bone health is crucial throughout all stages of life. This guide explores the factors that influence bone density, including nutrition, exercise, and lifestyle choices, while providing age-specific recommendations for bone health maintenance and the prevention of conditions like osteoporosis.'
    },
    {
      id: 19,
      title: 'Managing Stress in the Digital Age',
      author: 'Dr. Kiran Shah',
      date: 'Aug 15, 2024',
      brief: 'Modern approaches to stress management in a connected world...',
      details: 'The digital age presents unique challenges for stress management and mental well-being. This comprehensive guide explores the impact of technology on stress levels, while providing practical strategies for digital wellness, including mindful technology use, stress-reduction techniques, and maintaining work-life balance in an increasingly connected world.'
    },
    {
      id: 20,
      title: 'Understanding Respiratory Health',
      author: 'Dr. Suresh Kumar',
      date: 'Aug 10, 2024',
      brief: 'Essential knowledge for maintaining healthy lung function...',
      details: 'Respiratory health is fundamental to overall well-being. This detailed guide examines various aspects of lung health, including common respiratory conditions, preventive measures, breathing exercises, and lifestyle modifications that can help maintain optimal respiratory function and prevent respiratory complications.'
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