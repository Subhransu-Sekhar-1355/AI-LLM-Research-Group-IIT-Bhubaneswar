import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Projects from './pages/Projects';
import People from './pages/People';
import Resources from './pages/Resources';
import News from './pages/News';
import Opportunities from './pages/Opportunities';
import Collaboration from './pages/Collaboration';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="research" element={<Research />} />
          <Route path="publications" element={<Publications />} />
          <Route path="projects" element={<Projects />} />
          <Route path="people" element={<People />} />
          <Route path="resources" element={<Resources />} />
          <Route path="news" element={<News />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="collaboration" element={<Collaboration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
