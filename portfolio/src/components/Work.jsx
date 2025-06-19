import React, { useState, useEffect, useRef } from 'react';

const TimelineInvolvements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const Work = [
    {
      title: "Residential Life - Desk Assistant",
      description: "Assisted residents and visitors by providing front-desk support, managing inquiries, and ensuring smooth day-to-day operations in a university housing environment.",
      icon: "🏠",
      color: "from-purple-500 to-pink-500",
      period: "2023-2024"
    },
    {
      title: "Computer Science Dept- Student Assistant",
      description: "Provided administrative and technical support to the Computer Science department, assisting faculty, staff, and students with tasks related to coursework, events, and office operations.",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      period: "2023-Present"
    },
    {
      title: "Association of Computer Machinery - Operation Officer",
      description: "Overseeing task planning and maintaining Google Calendars for 9+ affiliated organizations and their events to ensure smooth coordination and scheduling.",
      icon: "🌐",
      color: "from-green-500 to-teal-500",
      period: "2022-Present"
    },
    {
      title: "President - Women in Science and Engineering",
      description: "President of Women in Science and Engineering (WiSE) at SFSU, leading event planning, coordinating team initiatives, and supporting outreach efforts to empower women in STEM across campus.",
      icon: "⭐",
      color: "from-orange-500 to-red-500",
      period: "2024-Present"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
    id="work"
    className="w-full bg-gray-50">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slide-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .timeline-card {
          transition: all 0.3s ease;
        }

        .timeline-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }

        .timeline-icon {
          transition: transform 0.3s ease;
        }

        .timeline-card:hover .timeline-icon {
          transform: scale(1.1);
        }

        .timeline-line {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
        }
      `}</style>

      {/* Header */}
      <div className="bg-slate-950 h-24 flex items-center justify-center relative"></div>

      {/* Main Content */}
      <div className="bg-white py-8">
        <div className="max-w-5xl mx-auto px-8" ref={sectionRef}>
          {/* Section Title */}
          <div className="text-center mb-8">
            <h1 className={`text-3xl font-bold mb-2 bg-gradient-to-r from-slate-950 to-purple-600 bg-clip-text text-transparent ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              Work
            </h1>
            <div className={`w-12 h-0.5 bg-gradient-to-r from-slate-950 to-purple-500 mx-auto rounded-full ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-2 h-full timeline-line rounded-full shadow-lg ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}></div>
            
            {Work.map((item, index) => (
              <div key={index} className={`relative flex items-stretch mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                {/* Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <div className={`timeline-card bg-yellow-100 rounded-2xl p-6 shadow-xl border border-gray-100 relative overflow-hidden ${
                    isVisible 
                      ? (index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right')
                      : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: isVisible ? `${index * 0.15}s` : '0s'
                  }}>
                    {/* Background Gradient */}
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-5 rounded-full transform translate-x-6 -translate-y-6`}></div>
                    
                    {/* Period Badge & Icon */}
                    <div className="flex justify-between items-center mb-4">
                      <span className={`text-xs font-bold text-white bg-gradient-to-r ${item.color} px-3 py-1 rounded-full shadow-lg`}>
                        {item.period}
                      </span>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-xl shadow-lg timeline-icon`}>
                        {item.icon}
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                    
                    {/* Bottom accent */}
                    <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${item.color}`}></div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="w-2/12 flex justify-center items-center">
                  {/* Timeline Node */}
                  <div className={`w-6 h-6 bg-white border-3 bg-gradient-to-r ${item.color} rounded-full shadow-lg z-10 relative ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: isVisible ? `${index * 0.15 + 0.2}s` : '0s'
                  }}>
                    <div className={`absolute inset-0.5 bg-gradient-to-r ${item.color} rounded-full`}></div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default TimelineInvolvements;