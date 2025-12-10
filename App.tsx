import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import AllProjectsPage from './pages/AllProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

// Using HashRouter for GitHub Pages / static file compatibility (double click index.html)
const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen text-white">
        <Background />
        <Navigation />
        
        {/* Main content wrapper with padding-top for fixed navbar */}
        <div className="pt-20"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjectsPage />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;