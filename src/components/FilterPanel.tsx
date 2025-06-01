import React from "react";
import { difficulties, allTopics, allCompanies } from "../data/problems";
import { Filter, SlidersHorizontal, BookOpen } from "lucide-react";
import "../styles/FilterPanel.css";

const dateOptions = [
  "all time",
  "1 months",
  "3 months",
  "6 months",
  "12 months",
];

interface FilterPanelProps {
  filters: {
    difficulties: string[];
    topics: string[];
    companies: string[];
    datecategories: string[];
  };
  onFilterChange: (filterType: string, values: string[]) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFilterChange,
}) => {
  const handleDifficultyChange = (difficulty: string) => {
    const updatedDifficulties = filters.difficulties.includes(difficulty)
      ? filters.difficulties.filter((d) => d !== difficulty)
      : [...filters.difficulties, difficulty];
    onFilterChange("difficulties", updatedDifficulties);
  };

  const handleTopicChange = (topic: string) => {
    const updatedTopics = filters.topics.includes(topic)
      ? filters.topics.filter((t) => t !== topic)
      : [...filters.topics, topic];
    onFilterChange("topics", updatedTopics);
  };

  const handleCompanyChange = (company: string) => {
    const updatedCompanies = filters.companies.includes(company)
      ? filters.companies.filter((c) => c !== company)
      : [...filters.companies, company];
    onFilterChange("companies", updatedCompanies);
  };

  const handleClearFilters = () => {
    onFilterChange("difficulties", []);
    onFilterChange("topics", []);
    onFilterChange("companies", []);
    onFilterChange("datecategories", []); // Added to clear datecategories as well
  };

  const handleDateChange = (date: string) => {
    const updatedDates = filters.datecategories.includes(date)
      ? filters.datecategories.filter((d) => d !== date)
      : [...filters.datecategories, date];
    onFilterChange("datecategories", updatedDates);
  };

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h3>
          <Filter size={16} /> Filters
        </h3>
        <button className="clear-filters-btn" onClick={handleClearFilters}>
          Clear All
        </button>
      </div>

      <div className="filter-section">
        <h4>
          <SlidersHorizontal size={14} /> Difficulty
        </h4>
        <div className="filter-options difficulty-options">
          {difficulties.map((difficulty: string) => (
            <label
              key={difficulty}
              className={`difficulty-tag ${difficulty.toLowerCase()}`}
            >
              <input
                type="checkbox"
                checked={filters.difficulties.includes(difficulty)}
                onChange={() => handleDifficultyChange(difficulty)}
              />
              <span>
                {difficulty.charAt(0) + difficulty.slice(1).toLowerCase()}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>
          <BookOpen size={14} /> Topics
        </h4>
        <div className="filter-options topic-options">
          {allTopics.map((topic: string) => (
            <label key={topic} className="topic-tag">
              <input
                type="checkbox"
                checked={filters.topics.includes(topic)}
                onChange={() => handleTopicChange(topic)}
              />
              <span>{topic}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Date Asked</h4>
        <div className="filter-options">
          {dateOptions.map((date) => (
            <label key={date} className="date-tag">
              <input
                type="checkbox"
                checked={filters.datecategories.includes(date)}
                onChange={() => handleDateChange(date)}
              />
              <span>{date}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>
          <Filter size={14} /> Companies
        </h4>
        <div className="filter-options company-options">
          {allCompanies.map((company: string) => (
            <label key={company} className="company-tag">
              <input
                type="checkbox"
                checked={filters.companies.includes(company)}
                onChange={() => handleCompanyChange(company)}
              />
              <span>{company}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
