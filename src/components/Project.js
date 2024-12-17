import React, { useEffect, useState } from 'react';

function Project() {
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      title: 'Student Records',
      description: 'Basic CRUD Operations with react and json server',
      link: 'https://nirmalkumar223.github.io/CRUD-operations-on-React-App/',
      image: process.env.PUBLIC_URL+'/images/CRUD.jpg',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">MERN Projects</h2>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-blue-700"
                >
                  Look Up
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
