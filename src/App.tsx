import React from 'react';
import Header from './components/Header';
import ProblemList from './components/ProblemList';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ProblemList />
      </main>
      <footer className="footer">
        <p>© 2025 LeetCode Practice Platform</p>
      </footer>
    </div>
  );
}

export default App;