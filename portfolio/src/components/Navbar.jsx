import { useRef,useEffect } from "react";
import PropTypes from "prop-types";
import { socials } from "./Footer";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope,FaHome, FaUser, FaBriefcase, FaStar, FaLaptopCode, FaRocket, FaProjectDiagram } from 'react-icons/fa';

const Navbar = ({navOpen}) => {
const lastActiveLink =useRef();
const activeBox=useRef();
const initActiveBox=()=>{

activeBox.current.style.top=lastActiveLink.current.offsetTop +'px';
activeBox.current.style.left=lastActiveLink.current.offsetLeft +'px';
activeBox.current.style.width=lastActiveLink.current.offsetWidth +'px';
activeBox.current.style.height=lastActiveLink.current.offsetHeight +'px';
}
useEffect(initActiveBox,[]);
window.addEventListener('resize', initActiveBox);
const activeCurrentLink =(event)=>{
lastActiveLink.current?.classList.remove('active');
event.target.classList.add('active');
lastActiveLink.current=event.target;

activeBox.current.style.top=event.target.offsetTop +'px';
activeBox.current.style.left=event.target.offsetLeft +'px';
activeBox.current.style.width=event.target.offsetWidth +'px';
activeBox.current.style.height=event.target.offsetHeight +'px';
}

   const navItems = [
    {
      label: 'Home',
      icon: FaHome,
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'About',
       icon: FaUser,
      link: '#about',
      className: 'nav-link'
    },
     {
      label: 'Skills',
       icon: FaLaptopCode,
      link: '#skills',
      className:'nav-link'
    },
    {
      label: 'Projects',
      icon: FaProjectDiagram,
      link: '#projects',
      className: 'nav-link'
    },
    {
      label: 'Work',
      icon: FaRocket,
      link: '#work',
      className: 'nav-link'
    },
    {
      label: 'Involvements',
      icon: FaStar,
      link: '#involvements',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      icon: FaEnvelope,
      link: '#contact',
      className: 'nav-link md:hidden'
    }
  ];


  const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  Email: FaEnvelope
};


  return (
 <nav className={'navbar ' + (navOpen ? 'active' : '')}>
      <div className="flex flex-col justify-between items-center mt-20 mb-10">
    <img
      src="/images/profile.webp"
      alt="Profile"
      className="w-64 h-64 rounded-full object-cover border-4 border-gray-600  shadow-lg mb-3"
    />
    <h1 className="text-4xl mt-5 font-bold text-white">Siya Jariwala</h1>
    
     <div className="flex gap-4 mt-5 text-3xl text-zinc-400">
    <a href="https://github.com/siyajariwala" target="_blank" rel="noreferrer" className="hover:text-pink-200">
      <FaGithub />
    </a>
    <a href="https://www.linkedin.com/in/siya-jariwala-890356252" target="_blank" rel="noreferrer" className="hover:text-pink-200">
      <FaLinkedin />
    </a>
    <a href="https://www.instagram.com/siya__jariwala" target="_blank" rel="noreferrer" className="hover:text-pink-200">
      <FaInstagram />
    </a>
    <a href="mailto:siya.jari14@gmail.com" className="hover:text-pink-200">
      <FaEnvelope />
    </a>
  </div>
  </div>
   
        {
          navItems.map(({label,link,className,ref,icon: Icon },key)=>(
          <a 
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={activeCurrentLink}

          >
      <Icon className="text-base" />
      {label}
  
            
          </a>
        ))
           
        }
        <div className="active-box" ref={activeBox}>
          
        </div>
    
    </nav>
  )
}
Navbar.PropTypes={
  navOpen:PropTypes.bool.isRequired
}
export default Navbar;