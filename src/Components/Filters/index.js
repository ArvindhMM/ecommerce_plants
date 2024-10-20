import React, { useState } from 'react';
import './index.css';

const Filter = () => {
  const [openFilters, setOpenFilters] = useState({});

  const toggleFilter = (filterName) => {
    setOpenFilters((prevState) => ({
      ...prevState,
      [filterName]: !prevState[filterName],
    }));
  };

  const filters = [
    'Type of Plants',
    'Price',
    'Nursery',
    'Ideal Plants Location',
    'Indoor/ Outdoor',
    'Maintenance',
    'Plant Size',
    'Water Schedule',
    'Color',
    'Seasonal',
    'Light Efficient',
  ];

  return (
    <div className="filter-container">
      <div className="filter-header">
        <span>Filter</span>
        <button className="clear-button">CLEAR ALL</button>
      </div>
      {filters.map((filter) => (
        <div key={filter} className="filter-section">
          <div className="filter-title" onClick={() => toggleFilter(filter)}>
            <span>{filter}</span>
            <span className="toggle-button">{openFilters[filter] ? '-' : '+'}</span>
          </div>
          {openFilters[filter] && (
            <div className="filter-content">
              <ul>
                <li>option 1</li>
                <li>option 2</li>
                <li>option 3</li>
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filter;
