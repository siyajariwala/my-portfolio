import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Involvements from "./components/Involvements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  const lenis = useLenis();

  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  // 🔁 Scroll to section if URL contains a hash (e.g., #about)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target && lenis) {
        setTimeout(() => {
          lenis.scrollTo(target, {
            offset: -100, // Adjust based on your header height
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 3),
          });
        }, 500); // Delay ensures everything is mounted
      }
    }
  }, [lenis]);

  return (
    <ReactLenis root>
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skill />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="involvements">
          <Involvements />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
