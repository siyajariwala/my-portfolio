import React, { useState, useEffect, useRef } from 'react';

const languageSkills = [
  {
    imgSrc: '/images/java.svg',
    label: 'Java',
    desc: 'Object-Oriented Programming',
    level: 90,
    color: 'from-slate-600 to-slate-800'
  },
   {
    imgSrc: '/images/java.svg',
    label: 'MongoDB',
    desc: 'DataBase Systems',
    level: 80,
    color: 'from-slate-600 to-slate-800'
  },
   {
    imgSrc: '/images/java.svg',
    label: 'NoSql',
    desc: 'DataBase Systems',
    level: 90,
    color: 'from-slate-600 to-slate-800'
  },
  
  {
    imgSrc: '/images/C++.svg',
    label: 'C++',
    desc: 'System Programming',
    level: 85,
    color: 'from-slate-700 to-slate-900'
  },
  {
    imgSrc: '/images/python.svg',
    label: 'Python',
    desc: 'Data Science & Backend',
    level: 88,
    color: 'from-slate-600 to-slate-800'
  },
  {
    imgSrc: '/images/html.svg',
    label: 'HTML5',
    desc: 'Semantic Web Structure',
    level: 95,
    color: 'from-slate-800 to-slate-950'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Dynamic Web Development',
    level: 92,
    color: 'from-slate-700 to-slate-900'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'Node.js',
    desc: 'Server-Side JavaScript',
    level: 87,
    color: 'from-slate-600 to-slate-800'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Component-Based UI',
    level: 93,
    color: 'from-slate-700 to-slate-950'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'Tailwind CSS',
    desc: 'Utility-First Styling',
    level: 89,
    color: 'from-slate-600 to-slate-800'
  }
];

const toolSkills = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'UI/UX Design',
    level: 85,
    color: 'from-slate-700 to-slate-900'
  },
  {
    imgSrc: '/images/github.svg',
    label: 'GitHub',
    desc: 'Version Control',
    level: 88,
    color: 'from-slate-800 to-slate-950'
  },
  {
    imgSrc: '/images/github.svg',
    label: 'PostMan',
    desc: 'API Testing and Development',
    level: 90,
    color: 'from-slate-800 to-slate-950'
  },
  {
    imgSrc: '/images/vscode.svg',
    label: 'VS Code',
    desc: 'Code Editor',
    level: 92,
    color: 'from-slate-600 to-slate-800'
  }
  ,
  {
    imgSrc: '/images/intellij.svg',
    label: 'IntelliJ',
    desc: 'Code Editor',
    level: 92,
    color: 'from-slate-600 to-slate-800'
  }
];

const SkillCard = ({ skill, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, index * 150);
      return () => clearTimeout(timer);
    } else {
      // Reset animation when not visible
      setAnimatedLevel(0);
    }
  }, [isVisible, skill.level, index]);

  return (
    <div
      className={`group relative bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border border-slate-200/50 hover:border-slate-300/70 ${
        isVisible ? 'animate-fadeInUp' : 'opacity-0'
      }`}
      style={{
        animationDelay: `${index * 150}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-slate-100/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} p-0.5 shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
            <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-950 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {skill.label.charAt(0)}
                </span>
              </div>
            </div>
          </div>
          <div className={`text-2xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent transition-all duration-500 ${isHovered ? 'scale-110 rotate-2' : ''}`}>
            {animatedLevel}%
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-slate-950 transition-colors duration-300">
          {skill.label}
        </h3>
        <p className="text-slate-600 text-sm mb-6 group-hover:text-slate-700 transition-colors duration-300">
          {skill.desc}
        </p>
        
        <div className="relative">
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out shadow-sm relative`}
              style={{
                width: `${animatedLevel}%`,
              }}
            >
              <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div
            className={`absolute top-0 h-2 w-2 bg-white rounded-full shadow-md border border-slate-300 transition-all duration-1500 ease-out`}
            style={{
              left: `${animatedLevel}%`,
              transform: 'translateX(-50%)'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const Skill = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset animation when section goes out of view
          setIsVisible(false);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px' // Trigger when section is almost in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      
      // Check if the section is already in view (for direct navigation)
      const rect = sectionRef.current.getBoundingClientRect();
      const isAlreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isAlreadyVisible) {
        setIsVisible(true);
      }
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes subtle-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(71, 85, 105, 0.1); }
          50% { box-shadow: 0 0 30px rgba(71, 85, 105, 0.2); }
        }
        .animate-subtle-glow {
          animation: subtle-glow 3s ease-in-out infinite;
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
      `}</style>
      
      <section id="skills" className="min-h-screen py-20 relative overflow-hidden" ref={sectionRef}>
        {/* Professional Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(71,85,105,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(51,65,85,0.05),transparent_50%)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full opacity-25 animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - Centered */}
          <div className="text-center mb-20 ml-24">
           
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight ml-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-700 to-slate-800 animate-gradient">
                Technical
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-950 to-slate-700 animate-gradient ">
                Arsenal
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed ">
              Crafting digital experiences with cutting-edge technologies and creative problem-solving
            </p>
          </div>

          {/* Languages and Frameworks - Centered */}
          <div className="mb-24 ml-20">
            <h3 className="text-3xl font-bold text-center mb-16">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900">
                Languages & Frameworks
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center ml-32">
              {languageSkills.map((skill, index) => (
                <div key={index} className="w-full max-w-sm">
                  <SkillCard
                    skill={skill}
                    index={index}
                    isVisible={isVisible}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tools - Centered */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-16">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-900 ml-20">
                Development Tools   
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto justify-items-center ml-52">
              {toolSkills.map((skill, index) => (
                <div key={index} className="w-full max-w-sm">
                  <SkillCard
                    skill={skill}
                    index={index + languageSkills.length}
                    isVisible={isVisible}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;