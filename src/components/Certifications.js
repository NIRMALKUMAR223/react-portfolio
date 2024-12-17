import React, { useEffect, useState } from 'react';

function Certifications() {
  const [isVisible, setIsVisible] = useState(false);

  const certifications = [
    { name: 'Front End Development', issuer: 'Great Learning', logo: process.env.PUBLIC_URL+'/images/html.jpg' },
    { name: 'Basic Of Java', issuer: 'Great Learning', logo: process.env.PUBLIC_URL+'/images/basicsofjava.jpg' },
    { name: 'Python Programming', issuer: 'NPTEL', logo: process.env.PUBLIC_URL+'/images/python.jpg' },
    { name: 'MERN Stack', issuer: 'NoviTech', logo: process.env.PUBLIC_URL+'/images/mern.jpeg' },
    { name: 'ChatGPT for Everyone', issuer: 'GUVI', logo: process.env.PUBLIC_URL+'/images/chatgpt.jpeg' },
    { name: 'IOT', issuer: 'FutureSkills', logo: process.env.PUBLIC_URL+'/images/iot.PNG' },
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

    const element = document.getElementById('certifications');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="certifications"
      className="py-20 bg-gray-100 text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Certifications</h2>
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="group flex flex-col items-center bg-white shadow-lg text-sm rounded-lg p-3 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <img
                src={certification.logo}
                alt={certification.name}
                className="w-54 h-40 m-1 mb-1 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800">{certification.name}</h3>
              <p className="text-sm text-gray-600">{certification.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
