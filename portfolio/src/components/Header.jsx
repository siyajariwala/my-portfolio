import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* Top Slate Bar */}
      <div className="absolute top-0 left-0 w-full h-24 bg-slate-950 z-10" />

      {/* Header on top of the slate bar */}
      <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">

          {/* Logo */}
          <h1>
            <a href="/" className="logo" />
            <img
              src="/images/logo.svg"  // ✅ Don't use "public/"
              width={40}
              height={40}
              alt="Siya Jariwala"
            />
          </h1>

          {/* Mobile Menu */}
          <div className="relative md:justify-self-center">
            <button
              className="menu-btn sm:block md:hidden"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              <span className="material-symbols-rounded">
                {navOpen ? "close" : "menu"}
              </span>
            </button>
            <Navbar navOpen={navOpen} />
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="btn btn-secondary max-md:hidden md:justify-self-end absolute top-6 right-4 sm:right-8 md:right-12 lg:right-16 z-50"
          >
            Contact me
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
