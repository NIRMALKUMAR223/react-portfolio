import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            Nirmal's Portfolio
          </div>
          <div className="flex items-center space-x-4">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg">About</a>
              <a href="#skills" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg">Projects</a>
              <a href="#hobbies" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg">Hobbies</a>
              <a href="#certifications" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg">Certificates</a>
              <a href="#experience" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg">Academic</a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg">Contact</a>
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-800`}>
        <a
          href="#about"
          className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg"
          onClick={toggleMenu}
        >
          About
        </a>
        <a
          href="#skills"
          className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg"
          onClick={toggleMenu}
        >
          Skills
        </a>
        <a
          href="#projects"
          className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg"
          onClick={toggleMenu}
        >
          Projects
        </a>
        <a
          href="#hobbies"
          className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg"
          onClick={toggleMenu}
        >
          Hobbies
        </a>
        <a
          href="#certifications"
          className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg"
          onClick={toggleMenu}
        >
          Certificates
        </a>
        <a
          href="#experience"
          className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg"
          onClick={toggleMenu}
        >
          Internships
        </a>
        <a
          href="#contact"
          className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg"
          onClick={toggleMenu}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
