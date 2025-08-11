import React, { useState, useEffect } from 'react';
import { ButtonPrimary, ButtonOutline } from './Button';
import { Slide } from "react-awesome-reveal";

const Hero = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Always scroll to top when Hero component mounts (page refresh/load)
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Force re-trigger animation when component mounts
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationKey(prev => prev + 1);
        }
      },
      { threshold: 0.1 }
    );

    const heroElement = document.getElementById('home');
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen pt-28 lg:pt-36 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pl-20">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-7rem)] lg:min-h-[cal(100vh-9rem)]">
          
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 space-y-8">
            
            {/* Status Badge */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                <img 
                  src="/images/avatar-1.jpg"
                  width={36}
                  height={36}
                  alt="Siya Jariwala"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = '<div class="w-full h-full bg-green-950 rounded-lg flex items-center justify-center text-white font-bold">SJ</div>';
                  }}
                />
              </div>
              <div className="flex items-center gap-2 text-green-950 text-sm sm:text-base font-medium">
                <div className="relative">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                </div>
                Available for work
              </div>
            </div>
            
            {/* Main Heading - Using key to force re-trigger */}
            <Slide key={animationKey} direction="left" cascade triggerOnce damping={0.2}>
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="block mt-2 text-slate-950 whitespace-nowrap ">Tech-Enthusiast!!</span>
                  <span className="block mt-2 text-slate-900 ">Turning ideas into digital reality.</span>
                </h1>
              </div>
            </Slide>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary  
                href="/resume/Siya_Jariwala_Resume (2) (1) (1) (4).pdf"
                label="View Resume"
                icon="visibility"
                target="_blank"
              />
              <ButtonOutline
                href="#about"
                label="Scroll Down"
                icon="arrow_downward"
              />
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              <div className="aspect-[4/5] bg-gradient-to-t from-green-950 via-green-950/40 to-transparent rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="/images/banner.jpg"
                  alt="Siya Jariwala"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = '<div class="w-full h-full bg-green-950 flex items-center justify-center text-white text-2xl font-bold">Portfolio Hero Image</div>';
                  }}
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Hero;