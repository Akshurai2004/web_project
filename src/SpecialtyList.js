// src/SpecialtyList.js
import React from 'react';
import styled from 'styled-components';

const SpecialtyList = ({ filteredSpecialties }) => {
  return (
    <SpecialtyListWrapper>
      {filteredSpecialties.map((specialty) => (
        <SpecialtyItem key={specialty.id}>
          <SpecialtyName>{specialty.name}</SpecialtyName>
        </SpecialtyItem>
      ))}
    </SpecialtyListWrapper>
  );
};

const SpecialtyListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1.5rem;
`;

const SpecialtyItem = styled.div`
  background-color: #f0f0f0;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SpecialtyName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export default SpecialtyList;
