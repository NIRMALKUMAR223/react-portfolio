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
    <section id="about" className="py-24 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* Text Content */}
        <div
          className={`md:w-7/12 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-center md:text-left mb-6 w-fit">
            About Me
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Hello! I'm <span className="text-blue-600 font-semibold">Nirmal Kumar</span>, a passionate and detail-oriented software developer. With expertise in Full-Stack Development, I create responsive, dynamic web applications that deliver excellent user experiences. I am constantly exploring new technologies, and I am particularly fascinated by the fields of <span className="font-semibold">Natural Language Processing (NLP)</span> and <span className="font-semibold">Machine Learning</span>.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            I have worked on various projects ranging from building scalable web applications to implementing NLP techniques for real-world problems. My goal is to leverage my skills to create innovative solutions and contribute to impactful projects.
          </p>
          <p className="text-lg leading-relaxed">
            In my free time, I love to <span className="italic">travel</span>, listen to <span className="italic">music</span>, and learn new things to continuously grow both personally and professionally.
          </p>
        </div>


        {/* Image with Animation */}
        <div className="md:w-5/12 flex justify-center">
          <img
            src={process.env.PUBLIC_URL + '/images/nirmal.jpeg'}
            alt="Nirmal Kumar"
            className={`w-80 h-80 object-cover rounded-3xl shadow-lg border-4 border-gray-300 transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-110 rotate-0' : 'opacity-0 scale-90 rotate-6'
            }`}
          />
        </div>

      </div>
    </section>
  );
}

export default About;
