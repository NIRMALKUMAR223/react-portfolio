import React, { useEffect, useState } from 'react';

function Hobbies() {
  const [isVisible, setIsVisible] = useState(false);

  const hobbies = [
    { name: 'Reading', icon: '📚' },
    { name: 'Music', icon: '🎵' },
    { name: 'Traveling', icon: '✈️' },
    { name: 'Photography', icon: '📸' },
    { name: 'Coding', icon: '💻' },
    { name: 'Gaming', icon: '🎮' },
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

    const element = document.getElementById('hobbies');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="hobbies"
      className="py-20 bg-gray-100 text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">My Hobbies</h2>
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="group flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="text-4xl mb-4">{hobby.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{hobby.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hobbies;
