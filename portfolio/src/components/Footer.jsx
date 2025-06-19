import React from 'react';
import { ButtonPrimary } from './Button';
const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Reviews',
    href: '#reviews'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

export const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/siyajariwala'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/siya-jariwala-890356252/'
  },

  {
    label: 'Instagram',
    href: 'https://www.instagram.com/siya__jariwala'
  },
  {
    label: 'Email',
    href: 'mailto:siya.jari14@gmail.com'
  }
];
const Footer = () => {
  return (
    <footer className="section">
        <div className="container max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-2">

                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                       Let&apos;s work together today ! 
                    </h2>
                    <ButtonPrimary
                    href="mailto:siya.jari14@gmail.com"
                    label="Start project"
                    icon="chevron_right"
                    classes="reveal-up"
                    />
                </div>

            <div className="grid grid-cols-2 gaps-4 lg:pl-20">

                <div>
                    <p className="mb-2 reveal-up font-bold text-3xl">Sitemap</p>

                    <ul>
                        {sitemap.map(({label,href},key)=>(
                            <li key={key}>
                                <a 
                                href={href}
                                 className="block text-sm text-slate-950 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                 >
{label}
                                 </a>
                            </li>
                        ))}
                    </ul>
                </div>



                <div>
                    <p className="mb-2 reveal-up font-bold text-3xl">Socials</p>

                    <ul>
                        {socials.map(({label,href},key)=>(
                            <li key={key}>
                                <a 
                                href={href}
                                target='_blank'
                                 className="block text-sm text-slate-950 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                 >
{label}
                                 </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            </div>
            

            <div className="flex items-center justify-between pt-10 mb-8">
                <a 
                href="/" 
                className="logo reveal-up"
                >
                    <img
                    src="/public/images/logo.svg"
                    width={40}
                    height={40}
                    alt="Logo"
                    />
                </a>

                <p className="text-zinc-800 text-sm" reveal-up>
                    &copy; 2025 <span className="text-zinc-800">SiyaJariwala</span>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
