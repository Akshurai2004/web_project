// src/SearchBar.js
import React from 'react';
import styled from 'styled-components';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <SearchBarWrapper>
      <SearchInput
        type="text"
        placeholder="Search by Specialty, Procedure & Conditions"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export default SearchBar;
