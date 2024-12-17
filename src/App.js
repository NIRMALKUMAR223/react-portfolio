import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Hobbies from './components/Hobbies';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <Header />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Hobbies Section */}
      <Hobbies />

      {/* Certifications Section */}
      <Certifications />

      {/* Experience Section */}
      <Experience />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;
