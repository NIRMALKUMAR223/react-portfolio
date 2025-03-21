import React, { useEffect, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

function Project() {
  const [isVisible, setIsVisible] = useState(false);
  
  const projects = [
    {
      title: 'Food Order',
      description: 'React + Tailwind.',
      images: [
        `${process.env.PUBLIC_URL}/images/foodApp1.JPG`,
        `${process.env.PUBLIC_URL}/images/foodApp2.JPG`,
        `${process.env.PUBLIC_URL}/images/foodApp3.JPG`,
      ],
      
    },
    {
      title: 'Smart Out Pass',
      description: 'Basic Operations with React ( Tailwind ) and JSON Server.',
      images: [
        `${process.env.PUBLIC_URL}/images/pass1.JPG`,
        `${process.env.PUBLIC_URL}/images/pass2.JPG`,
        `${process.env.PUBLIC_URL}/images/pass1.1.JPG`,
        `${process.env.PUBLIC_URL}/images/pass3.JPG`,
        `${process.env.PUBLIC_URL}/images/pass2.1.JPG`,
        `${process.env.PUBLIC_URL}/images/pass4.JPG`,
        `${process.env.PUBLIC_URL}/images/pass5.JPG`,
      ],
    },
    {
      title: 'Netflix Clone',
      description: 'React + Tailwind.',
      images: [
        `${process.env.PUBLIC_URL}/images/netflix1.JPG`,
        `${process.env.PUBLIC_URL}/images/netflix2.JPG`,
      ],
    },
    {
      title: 'Bus Booking',
      description: 'Basic Operations with React and JSON Server.',
      images: [
        `${process.env.PUBLIC_URL}/images/bus1.JPG`,
        `${process.env.PUBLIC_URL}/images/bus2.JPG`,
        `${process.env.PUBLIC_URL}/images/bus1.1.JPG`,
        `${process.env.PUBLIC_URL}/images/bus3.JPG`,
        `${process.env.PUBLIC_URL}/images/bus2.1.JPG`,
        `${process.env.PUBLIC_URL}/images/bus2.2.JPG`,
      ],
    },
  ];

  // State for each project (independent indexes and hover effects)
  const [currentIndexes, setCurrentIndexes] = useState(Array(projects.length).fill(0));
  const [hoverSides, setHoverSides] = useState(Array(projects.length).fill(null));

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

  const handleNext = (index) => {
    setCurrentIndexes((prevIndexes) =>
      prevIndexes.map((value, i) =>
        i === index && value < projects[i].images.length - 1 ? value + 1 : value
      )
    );
  };

  const handlePrev = (index) => {
    setCurrentIndexes((prevIndexes) =>
      prevIndexes.map((value, i) =>
        i === index && value > 0 ? value - 1 : value
      )
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">MERN Projects</h2>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <div
                className="relative w-full h-56 overflow-hidden"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  setHoverSides((prevSides) =>
                    prevSides.map((value, i) => (i === index ? (x > rect.width / 2 ? 'right' : 'left') : value))
                  );
                }}
                onMouseLeave={() =>
                  setHoverSides((prevSides) =>
                    prevSides.map((value, i) => (i === index ? null : value))
                  )
                }
              >
                <img
                  src={project.images[currentIndexes[index]]}
                  alt={project.title}
                  className="w-full  h-full  transition-all duration-300"
                />

                {hoverSides[index] === 'right' && (
                  <button
                    onClick={() => handleNext(index)}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-80 hover:opacity-100 transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                )}

                {hoverSides[index] === 'left' && (
                  <button
                    onClick={() => handlePrev(index)}
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-80 hover:opacity-100 transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
