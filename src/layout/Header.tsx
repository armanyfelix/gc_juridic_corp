"use client";

import { useEffect } from "react";
import Link from "next/link";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";

const links = [
  {
    label: "INICIO",
    url: "#home",
  },
  {
    label: "NOSOTROS",
    url: "#about",
  },
  {
    label: "PRACTICAS",
    url: "#practices",
  },
  {
    label: "CASOS",
    url: "#cases",
  },
  {
    label: "NOTICIAS",
    url: "#news",
  },
  {
    label: "ABOGADOS",
    url: "#attorneys",
  },
  {
    label: "CONTACTO",
    url: "#contact",
  },
];

function Header() {
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        const position =
          (document.getElementById("top") as HTMLElement) || null;
        position.style.top = "0";
        const transition =
          (document.getElementById("top") as HTMLElement) || null;
        transition.style.transition = "top 0.6s";
      } else {
        const position =
          (document.getElementById("top") as HTMLElement) || null;
        position.style.top = "-74px";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <>
      <div
        id="top"
        className="drawer fixed z-50 bg-slate-800 max-[90px] sm:max-h-[170px] flex flex-col py-3 md:py-4 px-3 sm:px-8 md:px-8 lg:px-20 2xl:px-80"
      >
        <div
          className="pb-5 mb-3 w-full hidden sm:flex items-center justify-between border-b-2 border-gray-600
        px-1 md:px-2 lg:px-5"
        >
          <div className="flex items-center text-xs">
            <div className="flex items-center pr-2">
              <MapPinIcon className="w-4 h-4 text-primary mr-2" />
              <span className="">121 Bvld. Diaz Ordaz, Tijuana , Mexico</span>
            </div>
            <div className="flex items-center border-l-2 border-gray-600 px-2">
              <PhoneIcon className="w-4 h-4 text-primary mr-2" />
              <span>3164-5456854</span>
            </div>
            <div className="flex items-center border-l-2 border-gray-600 pl-2">
              <ClockIcon className="w-5 h-5 text-primary mr-2 brightness-125" />
              <span>9AM - PM</span>
            </div>
          </div>
          <div className="flex items-center">
            <button className="border-2 border-primary text-xs md:text-base py-1 px-3 rounded-3xl font-semibold hover:bg-primary ease-in duration-200">
              Consulta Gratis
            </button>
          </div>
        </div>
        <input
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle text-white"
        />
        <div className="drawer-content drawer-end flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar">
            <div className="flex-1">
              <Link href="/" legacyBehavior>
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-current"
                >
                  <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                </svg>
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {links &&
                  links.map((l, i) => (
                    <li key={i}>
                      <Link href={l.url}>{l.label}</Link>
                    </li>
                  ))}
                {/* <li>
                <button className="text-center text-white no-underline text-xl items-center hover:text-primary ease-in duration-200">
                  <MagnifyingGlassIcon className="w-5 h-5" />
                </button>
              </li> */}
              </ul>
            </div>
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-slate-800">
            {links &&
              links.map((l, i) => (
                <li key={i}>
                  <Link
                    href={l.url}
                    className="hover:text-primary ease-in duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
