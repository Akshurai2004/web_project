import React, { useState } from 'react';
import './HealthServicesPage.css';
import Banner from './Banner';
import SearchBar from './SearchBar';
import SpecialtyList from './SpecialityList';

const medicalSpecialties = [
  { id: 1, name: 'Allergy and Immunology', startsWith: 'A' },
  { id: 2, name: 'Anesthesiology', startsWith: 'A' },
  { id: 3, name: 'Cardiology', startsWith: 'C' },
  { id: 4, name: 'Dermatology', startsWith: 'D' },
  { id: 5, name: 'Endocrinology', startsWith: 'E' },
  { id: 6, name: 'Family Medicine', startsWith: 'F' },
  { id: 7, name: 'General Surgery', startsWith: 'G' },
  { id: 8, name: 'Gastroenterology', startsWith: 'G' },
  { id: 9, name: 'Gynecology', startsWith: 'G' },
  { id: 10, name: 'Hematology', startsWith: 'H' },
  { id: 11, name: 'Immunology', startsWith: 'I' },
  { id: 12, name: 'Nephrology', startsWith: 'N' },
  { id: 13, name: 'Neurology', startsWith: 'N' },
  { id: 14, name: 'Oncology', startsWith: 'O' },
  { id: 15, name: 'Occupational Medicine', startsWith: 'O' },
  { id: 16, name: 'Orthopedics', startsWith: 'O' },
  { id: 17, name: 'Ophthalmology', startsWith: 'O' },
  { id: 18, name: 'Pathology', startsWith: 'P' },
  { id: 19, name: 'Pediatrics', startsWith: 'P' },
  { id: 20, name: 'Psychiatry', startsWith: 'P' },
  { id: 21, name: 'Pulmonology', startsWith: 'P' },
  { id: 22, name: 'Plastic Surgery', startsWith: 'P' },
  { id: 23, name: 'Radiology', startsWith: 'R' },
  { id: 24, name: 'Rheumatology', startsWith: 'R' },
  { id: 25, name: 'Urology', startsWith: 'U' }
];

const HealthServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSpecialties = medicalSpecialties.filter((specialty) =>
    specialty.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Banner />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SpecialtyList filteredSpecialties={filteredSpecialties} />
    </div>
  );
};

export default HealthServicesPage;
