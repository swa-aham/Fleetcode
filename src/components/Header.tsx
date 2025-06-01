import React from 'react';
import { Search } from 'lucide-react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>FLeet<span>code</span></h1>
        </div>
        <div className="search-container">
          <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search problems..." />
          </div>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#problems" className="active">Problems</a></li>
            <li><a href="#companies">Companies</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;