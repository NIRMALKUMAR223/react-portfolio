import React, { useEffect, useState } from 'react';

function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  const experiences = [
    {
      title: 'IOT (main project)',
      company: 'Galwin Technology',
      duration: 'Jan 2024 - Jul 2024',
      description: 'The "Intruder Detection and Security Monitoring Using IoT" project is an innovative security solution designed to enhance the safety of homes, offices, and sensitive areas through advanced technology. This project leverages the power of the Internet of Things (IoT) to create a real-time, intelligent, and responsive security system that detects unauthorized access and intrusions.Our mission is to develop a cost-effective and efficient security system that utilizes the latest IoT technologies to protect people, property, and assets from unauthorized access and intrusions. We aim to provide a user-friendly and reliable security solution that can be easily installed and managed, making advanced security accessible to everyone.',
    },
    {
      title: 'NLP (mini project)',
      company: 'NET TEL SOLUTIONS',
      duration: 'Jun 2022 - Aug 2022',
      description: "College Inquiry Bot, your dedicated virtual assistant designed to simplify the process of finding the perfect college and course for you. Whether you're a prospective student, a parent, or a guardian, our bot is here to provide instant and accurate information about various colleges, courses, admission processes, scholarships, campus life, and much more.Our mission is to empower students and their families with accurate and timely information, making the college search and application process as smooth and stress-free as possible. By leveraging the latest in artificial intelligence and natural language processing technologies, we aim to provide a reliable and efficient service that bridges the gap between prospective students and their future educational institutions.",
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

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Academic Project's</h2>
        <div
          className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <span className="text-xl font-semibold">{experience.title[0]}</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">{experience.title}</h3>
                <p className="text-sm text-gray-600">{experience.company}</p>
                <p className="text-xs text-gray-500 mb-4">{experience.duration}</p>
                <p className="text-gray-700">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
