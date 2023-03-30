'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { ClockIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const links = [
  {
    label: 'INICIO',
    url: '#home',
  },
  {
    label: 'NOSOTROS',
    url: '#about',
  },
  {
    label: 'PRACTICAS',
    url: '#practices',
  },
  {
    label: 'CASOS',
    url: '#cases',
  },
  {
    label: 'NOTICIAS',
    url: '#news',
  },
  {
    label: 'ABOGADOS',
    url: '#attorneyd',
  },
  {
    label: 'CONTACTO',
    url: '#cantact',
  },
]

function Header() {


  useEffect(() => {
    let prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        const position = (document.getElementById('top') as HTMLElement) || null
        position.style.top = '0'
        const transition = (document.getElementById('top') as HTMLElement) || null
        transition.style.transition = 'top 0.6s'
      } else {
        const position = (document.getElementById('top') as HTMLElement) || null
        position.style.top = '-70px'
      }
      prevScrollpos = currentScrollPos
    }
  }, [])
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <header
        id="top"
        className="fixed top-0 right-0 left-0 z-40 bg-slate-800 px-40"
      >
        <div className="my-5 flex items-center justify-between ">
          <div className="flex items-center">
            <MapPinIcon className="w-4 h-4 text-primary mr-2" />
            <span className="">121 King Street, Melbourne , Australia</span>
          </div>
          <div className="flex items-center">
            <PhoneIcon className="w-4 h-4 text-primary mr-2" />
            <span>3164-5456854</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="w-5 h-5 text-primary mr-2 brightness-125" />
            <span>9AM - PM</span>
          </div>
          <div className="flex items-center">
            <button className="border-2 border-primary py-1 px-3 rounded-3xl font-semibold hover:bg-primary ease-in duration-300">
              Consulta Gratis
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-t-slate-600 py-10">
          <div>
            <Link href="/" legacyBehavior>
              <svg width="62" height="20" viewBox="0 0 62 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0L1 19H12.5" stroke="black" strokeWidth="2" />
                <path d="M11.5 19.5L20 1H21L30.5 19.5M30.5 0V20" stroke="black" strokeWidth="2" />
                <path d="M41.5 0.5L50.5 18.5H51.5L60.5 0.5" stroke="black" strokeWidth="2" />
                <path d="M30.5 1H42.5" stroke="black" strokeWidth="2" />
              </svg>
            </Link>
          </div>
          <div id="site-menu" className="flex flex-col z-50 sm:flex-row justify-between items-center">
            <nav
              className={`w-full sm:w-auto hidden md:block font-sans text-white self-end sm:space-x-6 sm:self-center sm:flex flex-row items-center`}
            >
              {links && links.map((l, i) => (
                <Link
                  key={i}
                  onClick={() => setOpen(false)}
                  href={l.url}
                  className="text-center text-white no-underline items-center hover:text-primary ease-in duration-200"
                >
                  <span>{l.label}</span>
                </Link>
              ))}

            </nav>
            <button
              className="text-center text-white no-underline text-xl items-center hover:text-primary ease-in duration-200 ml-20"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
            <button
              id="menuBtn"
              aria-label="menu"
              className={`p-0 hamburger block md:hidden focus:outline-none ${open ? 'open' : ''}`}
              onClick={() => setOpen(!open)}
            >
              <span className="hamburger__top-bun" />
              <span className="hamburger__bottom-bun" />
            </button>
          </div>
        </div>
      </header>
      {/* MENU */}
      <section
        className={`${open ? 'right-0 w-full md:w-[50%] lg:w-[30%]' : 'translate-x-96 right-0'}
          transition duration-700 easy-in-out fixed top-0 text-white z-50 h-screen bg-black/30 backdrop-blur-md b`}
      >
        <button
          id="menuBtn"
          aria-label="menu"
          className={`mt-2 mr-6 hamburger block float-right ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <span className="hamburger__top-bun" />
          <span className="hamburger__bottom-bun" />
        </button>
        <nav className={` font-bold text-white flex flex-col space-y-5 mt-20 items-center`}>
          <Link
            onClick={() => setOpen(false)}
            href="#proyects"
            className="text-center font-mono text-white no-underline items-center hover:text-blue-400"
          >
            <span className={`text-5xl`}>Proyects</span>
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="#about"
            className=" text-center font-mono text-white no-underline text-xl items-center hover:text-indigo-400"
          >
            <span className={`text-5xl`}>About</span>
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="#contact"
            className="text-center font-mono text-white no-underline text-xl items-center hover:text-purple-400"
          >
            <span className={` text-5xl`}>Contact</span>
          </Link>
        </nav>
      </section>
      <style jsx>{`
        /* HAMBURGER MENU */
        .hamburger {
          cursor: pointer;
          width: 48px;
          height: 48px;
          transition: all 0.25s;
          border: 0;
          background: transparent;
        }
        .hamburger__top-bun,
        .hamburger__bottom-bun {
          content: '';
          position: absolute;
          width: 24px;
          height: 2px;
          background: #fff;
          transform: rotate(0);
          transition: all 0.5s;
        }
        .hamburger:hover [className*='-bun'] {
          background: #333;
        }
        .hamburger__top-bun {
          transform: translateY(-5px);
        }
        .hamburger__bottom-bun {
          transform: translateY(3px);
        }
        .open {
          transform: rotate(90deg);
          transform: translateY(-1px);
        }
        .open .hamburger__top-bun {
          transform: rotate(45deg) translateY(0px);
        }
        .open .hamburger__bottom-bun {
          transform: rotate(-45deg) translateY(0px);
        }
      `}</style>
    </>
  )
}

// const ThemeIcon = () => {
//   const { theme, setTheme } = useTheme();
//   const router = useRouter()
//   const handleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//     router.reload();
//   };
//   return (
//     <button onClick={() => handleTheme()} className=" outline-none border-none decoration-slice">
//       {theme === 'light' ? (
//         <div className="w-6 h-6 rounded-full bg-gradient-to-tl from-red-600 via-red-60  to-yellow-600 shadow-sun hover:animate-pulse"></div>
//       ) : (
//         <div className="w-6 h-6 rounded-full bg-gradient-to-bl from-gray-600  to-gray-700 shadow-moon hover:animate-pulse"></div>
//       )}
//     </button>
//   );
// };

export default Header
