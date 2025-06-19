import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/images/piano-tile.png',
    title: 'Piano Tiles Game',
    tags: ['HTML', 'CSS', 'Javascript'],
    projectLink: 'https://github.com/siyajariwala/piano-tiles-game.git'
  },
];

const Work = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all reveal elements
    const revealElements = document.querySelectorAll('.reveal-up');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen section bg-slate-950" id="projects">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="headline-2 mb-8 reveal-up text-yellow-50">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({imgSrc, title, tags, projectLink}, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up project-card"
              style={{ transitionDelay: `${key * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;