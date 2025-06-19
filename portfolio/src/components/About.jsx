import React, { useEffect, useState, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Reset animation state when component mounts
    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a delay so the static content appears first, then animations start
          setTimeout(() => {
            setIsVisible(true);
          }, 600); // 600ms delay after the section comes into view
        } else {
          // Reset animation when section goes out of view
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Trigger when section is almost in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      
      // Check if the section is already in view (for direct navigation)
      // Use setTimeout to ensure DOM is fully rendered
      setTimeout(() => {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          const isAlreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
          
          if (isAlreadyVisible) {
            setTimeout(() => {
              setIsVisible(true);
            }, 600);
          }
        }
      }, 100); // Small delay to ensure DOM is ready
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Empty dependency array ensures this runs on every mount

  return (
    <section id="about" className="min-h-screen bg-slate-950 py-16" ref={sectionRef}>
      <div className="px-8 ml-[20%] mr-8">
        {/* Heading with underline - Static (no animation) */}
        <h2 className="text-5xl font-bold text-pink-200 mb-6 relative">
          About
          <div className="w-20 h-1 bg-blue-500 mt-3"></div>
        </h2>
        
        {/* Introduction paragraph - Static (no animation) */}
        <p className="text-yellow-100 text-xl leading-relaxed mb-12 mt-6 font-medium">
          Welcome! I am Siya – a focused and goal-oriented Computer Science major seeking opportunities. Passionate about technology and dedicated to bringing innovative ideas into action by creating impactful solutions. Committed to leveraging technology to solve complex problems
        </p>

        {/* Main content layout with animations */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side: Image - Animated from left */}
          <div className={`w-full lg:w-2/5 transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-full opacity-0'
          }`}>
            <div className="relative">
              <img
                src="/images/me - Copy.jpeg"
                alt="Profile"
                className="w-full h-[600px] rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Right Side: Information - Animated from right */}
          <div className={`w-full lg:w-3/5 transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-full opacity-0'
          }`}>
            <h3 className="text-3xl font-bold text-pink-200 mb-3">
              Computer Science Undergraduate
            </h3>

            <p className="italic text-yellow-100 mb-8 text-xl">
              Experienced in computer vision, machine learning, and software development.
            </p>

            {/* Information grid - Two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-36 gap-y-6 mb-8 text-lg">
              
              <div className="flex">
                <span className="font-semibold text-pink-200 min-w-fit mr-3">
                  <span className="text-pink-200">›</span> Birthday:
                </span>
                <span className="text-yellow-100">14 Jan 2005</span>
              </div>

              <div className="flex">
                <span className="font-semibold text-pink-200 min-w-fit mr-3">
                  <span className="text-pink-200">›</span> Age:
                </span>
                <span className="text-yellow-100">20</span>
              </div>

              <div className="flex">
                <span className="font-semibold text-pink-200 min-w-fit mr-3">
                  <span className="text-pink-200">›</span> Website:
                </span>
                <a href="#" className="text-yellow-500 hover:text-blue-700">xyz.com</a>
              </div>

              <div className="flex flex-nowrap">
                <span className="font-semibold text-pink-200 min-w-fit mr-3 whitespace-nowrap">
                  <span className="text-pink-200">›</span> University:
                </span>
                <span className="text-yellow-100 whitespace-nowrap">San Francisco State University</span>
              </div>

              <div className="flex">
                <span className="font-semibold text-pink-200 min-w-fit mr-3">
                  <span className="text-pink-200">›</span> Phone:
                </span>
                <span className="text-yellow-100">+1 415 740 3073</span>
              </div>

              <div className="flex whitespace-nowrap">
                <span className="font-semibold text-pink-200 min-w-fit mr-3">
                  <span className="text-pink-200">›</span> Degree:
                </span>
                <span className="text-yellow-100">BSc Computer Science</span>
              </div>

              <div className="flex flex-nowrap">
                <span className="font-semibold text-pink-200 min-w-fit mr-3 whitespace-nowrap">
                  <span className="text-pink-200">›</span> City:
                </span>
                <span className="text-yellow-100 whitespace-nowrap">San Francisco, California, USA</span>
              </div>

              <div className="flex">
                <span className="font-semibold text-pink-200 min-w-fit mr-3">
                  <span className="text-pink-200">›</span> Email:
                </span>
                <span className="text-yellow-100">siya.jari14@gmail.com</span>
              </div>

            </div>

            {/* Summary paragraph */}
            <div className="text-gray-700 text-lg leading-relaxed bg-yellow-50 p-6 rounded-lg border-l-4 border-blue-500">
              Proficient in designing and implementing robust software solutions using modern frameworks and tools, with a strong focus on cybersecurity, data structures, and user-centric applications.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;