import React, { useEffect, useState } from 'react';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">My Skills</h2>
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-6">
            {/* HTML Skill */}
            <div className="flex items-center space-x-4 ml-6">
              <span className="text-lg font-medium w-1/4">HTML</span>
              <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
                <div
                  className={`h-2.5 bg-blue-600 rounded-full transition-all duration-1000 ${
                    isVisible ? 'w-4/5' : 'w-0'
                  }`}
                />
              </div>
            </div>

            {/* CSS Skill */}
            <div className="flex items-center space-x-4 ml-6">
              <span className="text-lg font-medium w-1/4">CSS</span>
              <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
                <div
                  className={`h-2.5 bg-blue-600 rounded-full transition-all duration-1000 ${
                    isVisible ? 'w-4/5' : 'w-0'
                  }`}
                />
              </div>
            </div>

            {/* JavaScript Skill */}
            <div className="flex items-center space-x-4 ml-6">
              <span className="text-lg font-medium w-1/4">JavaScript</span>
              <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
                <div
                  className={`h-2.5 bg-blue-600 rounded-full transition-all duration-1000 ${
                    isVisible ? 'w-4/5' : 'w-0'
                  }`}
                />
              </div>
            </div>

            {/* React Skill */}
            <div className="flex items-center space-x-4 ml-6">
              <span className="text-lg font-medium w-1/4">React</span>
              <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
                <div
                  className={`h-2.5 bg-blue-600 rounded-full transition-all duration-1000 ${
                    isVisible ? 'w-4/5' : 'w-0'
                  }`}
                />
              </div>
            </div>

            {/* Node.js Skill */}
            <div className="flex items-center space-x-4 ml-6">
              <span className="text-lg font-medium w-1/4">Node.js</span>
              <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
                <div
                  className={`h-2.5 bg-blue-600 rounded-full transition-all duration-1000 ${
                    isVisible ? 'w-3/5' : 'w-0'
                  }`}
                />
              </div>
            </div>

            {/* MongoDB Skill */}
            <div className="flex items-center space-x-4 ml-6">
              <span className="text-lg font-medium w-1/4">MongoDB</span>
              <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
                <div
                  className={`h-2.5 bg-blue-600 rounded-full transition-all duration-1000 ${
                    isVisible ? 'w-3/5' : 'w-0'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
