import React from 'react';
const aboutItems = [
  {
    label: 'Project done',
    number: 45
  },
  {
    label: 'Years of experience',
    number: 10
  }
];
const About = () => {
  return (
    <section 
    id="about"
    className="section"
    
    >
        <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
Welcome! I am Siya - Focus driven and goal-oriented Computer Science major seeking for opportunities. Passionate about 
technology and dedicated to bringing innovative ideas into action by creating impactful solutions. Committed 
to expanding skills and knowledge in Software Engineering and Cybersecurity while working on result-driven 
collaborative projects to drive excellence in the industry. 
            </p>

            <div className="flex flex-wrap items-center gap-4 mad:gap-7">
        {
        aboutItems.map(({label,number},key)=>(
        <div key={key}>
            <div className="flex items-center md:mb-2">
                <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                <span className="text-sky-400 font-semibol md:text-3xl">+</span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
                </div>
               
        ))
        }
<img src="/public/images/logo.svg" alt="Logo"
width={30}
height={30}
className="ml-auto md:w-[40px] md:h-[40px]"


/>
            </div>
        </div>
        </div>
    </section>
  )
}

export default About;
