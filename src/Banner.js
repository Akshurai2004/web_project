// src/Banner.js
import React from 'react';
import styled from 'styled-components';

const Banner = () => {
  return (
    <BannerSection>
      
      <BannerDescription>
        We are committed to addressing all your healthcare needs, offering services ranging from hospitals and clinics to labs, pharmacies, and insurance. Our goal is to provide a comprehensive and personalized healthcare experience that best serves you.
      </BannerDescription>
    </BannerSection>
  );
};

const BannerSection = styled.div`
  background-color: #f0f0f0;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
`;

const BannerTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const BannerDescription = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

export default Banner;
