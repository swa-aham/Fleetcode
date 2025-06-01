import React, { useState, useEffect } from 'react';
import FilterPanel from './FilterPanel';
import ProblemTable from './ProblemTable';
import { problems } from '../data/problems';
import '../styles/ProblemList.css';

const ProblemList: React.FC = () => {
  const [filteredProblems, setFilteredProblems] = useState(problems);
  const [filters, setFilters] = useState({
    difficulties: [],
    topics: [],
    companies: ['Amazon'], // Default to Amazon as shown in the example
  });
  const [sortConfig, setSortConfig] = useState({
    key: 'frequency',
    direction: 'desc'
  });

  // Apply filters and sorting
  useEffect(() => {
    let result = [...problems];
    
    // Apply difficulty filters
    if (filters.difficulties.length > 0) {
      result = result.filter(problem => 
        filters.difficulties.includes(problem.difficulty)
      );
    }
    
    // Apply topic filters
    if (filters.topics.length > 0) {
      result = result.filter(problem => 
        problem.topics.some(topic => filters.topics.includes(topic))
      );
    }
    
    // Apply company filters
    if (filters.companies.length > 0) {
      result = result.filter(problem => 
        problem.companies.some(company => filters.companies.includes(company))
      );
    }
    
    // Apply sorting
    result.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    
    setFilteredProblems(result);
  }, [filters, sortConfig]);

  const handleFilterChange = (filterType, values) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: values
    }));
  };

  const handleSort = (key) => {
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'desc' ? 'asc' : 'desc'
    }));
  };

  return (
    <div className="problem-list-container">
      <h2 className="section-title">DSA Problems</h2>
      <div className="problem-list-content">
        <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
        <ProblemTable 
          problems={filteredProblems} 
          sortConfig={sortConfig} 
          onSort={handleSort} 
        />
      </div>
    </div>
  );
};

export default ProblemList;