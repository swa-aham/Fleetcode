import React from 'react';
import { ArrowUp, ArrowDown, ExternalLink } from 'lucide-react';
import '../styles/ProblemTable.css';

interface Problem {
  id: number;
  difficulty: string;
  title: string;
  frequency: number;
  acceptanceRate: number;
  link: string;
  topics: string[];
}

interface ProblemTableProps {
  problems: Problem[];
  sortConfig: {
    key: string;
    direction: string;
  };
  onSort: (key: string) => void;
}

const ProblemTable: React.FC<ProblemTableProps> = ({ problems, sortConfig, onSort }) => {
  const getSortIcon = (columnName: string) => {
    if (sortConfig.key !== columnName) return null;
    return sortConfig.direction === 'asc' ? 
      <ArrowUp size={14} className="sort-icon" /> : 
      <ArrowDown size={14} className="sort-icon" />;
  };

  // Format acceptance rate as percentage
  const formatAcceptanceRate = (rate: number) => {
    return (rate * 100).toFixed(1) + '%';
  };

  return (
    <div className="problem-table-wrapper">
      <table className="problem-table">
        <thead>
          <tr>
            <th className="difficulty-column">Difficulty</th>
            <th>Title</th>
            <th 
              className={`sortable ${sortConfig.key === 'frequency' ? 'active' : ''}`}
              onClick={() => onSort('frequency')}
            >
              Frequency {getSortIcon('frequency')}
            </th>
            <th 
              className={`sortable ${sortConfig.key === 'acceptanceRate' ? 'active' : ''}`}
              onClick={() => onSort('acceptanceRate')}
            >
              Acceptance Rate {getSortIcon('acceptanceRate')}
            </th>
            <th>Topics</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {problems.length > 0 ? (
            problems.map(problem => (
              <tr key={problem.id} className="problem-row">
                <td>
                  <span className={`difficulty-badge ${problem.difficulty.toLowerCase()}`}>
                    {problem.difficulty.charAt(0) + problem.difficulty.slice(1).toLowerCase()}
                  </span>
                </td>
                <td className="title-cell">{problem.title}</td>
                <td className="frequency-cell">{problem.frequency.toFixed(1)}</td>
                <td>{formatAcceptanceRate(problem.acceptanceRate)}</td>
                <td className="topics-cell">
                  {problem.topics.slice(0, 3).map((topic, index) => (
                    <span key={index} className="topic-chip">{topic}</span>
                  ))}
                  {problem.topics.length > 3 && (
                    <span className="more-topics">+{problem.topics.length - 3}</span>
                  )}
                </td>
                <td>
                  <a 
                    href={problem.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="problem-link"
                  >
                    <ExternalLink size={16} />
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="no-results">No problems match your filters.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemTable;