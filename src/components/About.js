import React, { useEffect, useState } from 'react';

function About() {
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
      { threshold: 0.3 } // Trigger animation when 30% of the component is in view
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-gray-100 text-gray-800"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">About Me</h2>
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lg leading-relaxed mb-6">
            Hello! I'm Nirmal Kumar, a passionate and detail-oriented software developer. With expertise in Full-Stack Development, I create responsive, dynamic web applications that deliver excellent user experiences. I am constantly exploring new technologies, and I am particularly fascinated by the fields of Natural Language Processing (NLP) and Machine Learning.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            I have worked on various projects ranging from building scalable web applications to implementing NLP techniques for real-world problems. My goal is to leverage my skills to create innovative solutions and contribute to impactful projects.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            In my free time, I love to travel, listen to music, and learn new things to continuously grow both personally and professionally.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
